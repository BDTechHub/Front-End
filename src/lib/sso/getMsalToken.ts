import { msalInstance } from "@/lib/sso/msalInstance";
import { loginRequest } from "./authConfig";

export async function getMsalToken() {
	const account = msalInstance.getActiveAccount();
	if (!account) {
		throw Error(
			"No active account! Verify a user has been signed in and setActiveAccount has been called."
		);
	}

	const response = await msalInstance.acquireTokenSilent({
		...loginRequest,
		account: account,
	});

	let idToken = response.idToken;

	let token = account.idToken

	console.log("ID Token from account: ", token);
	console.log("ID Token from requisition: ", idToken);

	console.log("its same token?", token === idToken);
	
	

	return idToken;
}
