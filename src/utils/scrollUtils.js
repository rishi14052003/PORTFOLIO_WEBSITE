export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleSmoothScroll = (e, sectionId, callback) => {
  e.preventDefault();
  scrollToSection(sectionId);
  if (callback) callback();
};
