describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome to React'))).toBeVisible();
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
