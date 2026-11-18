import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, GitFork, RefreshCw, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';

const username = 'rishi14052003';
const profileUrl = `https://api.github.com/users/${username}`;
const repositoriesUrl = `${profileUrl}/repos?sort=updated&per_page=6&type=owner`;

const GitHubActivity = () => {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');

    const loadGitHubActivity = async () => {
      try {
        const [profileResponse, repositoriesResponse] = await Promise.all([
          fetch(profileUrl, { signal: controller.signal }),
          fetch(repositoriesUrl, { signal: controller.signal })
        ]);

        if (!profileResponse.ok || !repositoriesResponse.ok) {
          throw new Error('GitHub returned an unsuccessful response.');
        }

        const [profileData, repositoriesData] = await Promise.all([
          profileResponse.json(),
          repositoriesResponse.json()
        ]);

        if (!Array.isArray(repositoriesData)) {
          throw new Error('GitHub returned an unexpected repository list.');
        }

        setProfile(profileData);
        setRepositories(repositoriesData.filter((repository) => !repository.fork).slice(0, 4));
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError('GitHub activity is unavailable right now. You can still visit the profile directly.');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadGitHubActivity();
    return () => controller.abort();
  }, [retryCount]);

  return (
    <AnimatedSection id="github" className="section" animation="fadeInUp">
      <div className="github-heading-row">
        <div>
          <motion.h2 className="section-title">
            <Github className="section-icon" size={23} />
            GitHub activity
          </motion.h2>
          <p className="section-lede">
            Recent public repositories and profile stats, loaded live from GitHub.
          </p>
        </div>
        <a
          className="github-profile-link"
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          View profile <ExternalLink size={15} />
        </a>
      </div>

      {loading ? (
        <div className="github-loading" role="status" aria-live="polite">
          <span className="loading-dot" /><span className="loading-dot" /><span className="loading-dot" />
          <span>Loading public GitHub activity…</span>
        </div>
      ) : error ? (
        <div className="github-error" role="status">
          <p>{error}</p>
          <button type="button" className="btn btn-secondary" onClick={() => setRetryCount((count) => count + 1)}>
            <RefreshCw size={15} /> Try again
          </button>
        </div>
      ) : (
        <>
          <div className="github-stats">
            <div className="github-stat">
              <span>PUBLIC REPOSITORIES</span>
              <strong>{profile?.public_repos ?? 0}</strong>
            </div>
            <div className="github-stat">
              <span>FOLLOWERS</span>
              <strong>{profile?.followers ?? 0}</strong>
            </div>
            <div className="github-stat">
              <span>RECENT PROJECTS</span>
              <strong>{repositories.length}</strong>
            </div>
          </div>

          <div className="github-repositories">
            {repositories.map((repository, index) => (
              <motion.a
                key={repository.id}
                className="github-repository"
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                whileHover={{ y: -3 }}
              >
                <span className="repository-name">{repository.name}</span>
                <span className="repository-description">
                  {repository.description || 'Open-source project'}
                </span>
                <span className="repository-meta">
                  {repository.language && <span>{repository.language}</span>}
                  <span><Star size={13} /> {repository.stargazers_count}</span>
                  {repository.forks_count > 0 && <span><GitFork size={13} /> {repository.forks_count}</span>}
                </span>
                <ExternalLink className="repository-external" size={15} aria-hidden="true" />
              </motion.a>
            ))}
          </div>
          {repositories.length === 0 && (
            <p className="github-empty">No public repositories are available to display yet.</p>
          )}
        </>
      )}
    </AnimatedSection>
  );
};

export default GitHubActivity;
