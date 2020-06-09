describe('Registration', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8000');
  });

  test('Display headline', async () => {
    await expect(page).toEqualText('h1', 'My Little App');
  });

  test('Register new user', async () => {
    await page.fill('[name="firstName"]', 'Klaus');
    await page.fill('[name="lastName"]', 'Dieter');
    await page.click('button');
    await expect(page).toHaveText('#id', 'ID:');
  });
});
