import { UserService } from "lib/user-service"
import { test } from "vitest";

test("UserService exists", () =>{
    UserService
});

test("UserService has signIn method", () => {
    UserService.signIn("testEmail", "testPassword")
});