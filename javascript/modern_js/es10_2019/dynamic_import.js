// Dynamic import
// Imports can now be assigned to a variable:
element.addEventListener('click', async () => {
  const module = await import(`./api-scripts/button-click.js`);
  module.clickEvent();
});
