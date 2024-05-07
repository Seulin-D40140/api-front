import { Injectable } from '@angular/core';
import SecureStorage from 'secure-web-storage';

const SECRET_KEY = 'secret_key';
import CryptoJS from 'crypto-js';

@Injectable(
	{
		providedIn: 'root'
	})
export class AESEncryptDecryptServiceService 
{

	constructor() { }


}
