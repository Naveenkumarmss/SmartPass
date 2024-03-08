import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HandleFingerprintService {

  constructor(private snackBar: MatSnackBar) { }

  checkFingerprint(): any {
    try {
      window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then((event) => {
        if (!event) {
            this.snackBar.open("No biometric available", "Close");
        } else {

          const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
            challenge: new Uint8Array(32),
            rp: {
              name: 'localhost:4200', // This can be a friendly name for your relying party
            },
            user: {
              name: "Zeros Merlin",
              id: new Uint8Array(16),
              displayName: "zerosmerlin@example.com"
            },
            pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
            authenticatorSelection: {
              authenticatorAttachment: 'platform',
            },
            timeout: 60000,
            attestation: 'direct',
          };

          navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions
          })
            .then((newCredential) => {
              return newCredential;
            })
            .catch((error) => {
              this.snackBar.open("Authentication failed", "Close");
            });
        }
      });
    } catch (error) {
      alert("Error: " + error);
    }
    return undefined;
  }
}
