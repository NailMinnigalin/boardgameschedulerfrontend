import { test, expect } from '@playwright/test';

test.beforeEach(async ({ request }) => {
  const result = await request.delete('http://localhost:5116/testing/cleandb');
  expect(result.status).toBeTruthy()
});

test('Signin button redirect to signin page', async ({page}) =>{
  await page.goto('http://localhost:3000');

  await page.getByText('Sign in').click();
  await page.waitForURL('**/signin');

  expect(page.url()).toContain('/signin');
})

test('Signin page shows error message after failed signin attempts', async ({page}) =>{
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Sign In' }).click();

  await page.getByRole('textbox', { name: 'Enter your user name' }).fill('test@email.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('button', { name: 'Sign In' }).click();

  const errorText = page.getByText('Invalid email or password');
  expect(errorText).toBeDefined();
})

test('Signin page redirects after successful signin', async ({page, request}) =>{
  await request.post('http://localhost:5116/register', {
    data: {
      userName: "test",
      email: "test@email.com",
      password: "test!1A"
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Sign In' }).click();

  await page.getByRole('textbox', { name: 'Enter your user name' }).fill('test');
  await page.getByRole('textbox', { name: 'Password' }).fill('test!1A');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.waitForURL('http://localhost:3000');
  expect(page.url()).toContain('http://localhost:3000');
})

