import axios from 'axios';

class Http {
	headers = {
		'Content-Type': 'application/json',
	};
	private constructor() {}

	public static getInstance(): Http {
		return new Http();
	}

	public async get<T>(url: string): Promise<T> {
		return await (
			await axios.get(url, { headers: this.headers })
		).data;
	}

	public async post<T>(url: string, body: any): Promise<T> {
		return await (
			await axios.post(url, body, { headers: this.headers })
		).data;
	}

	public async put<T>(url: string, body: any): Promise<T> {
		return await (
			await axios.put(url, body, { headers: this.headers })
		).data;
	}

	public async delete<T>(url: string): Promise<T> {
		return await (
			await axios.delete(url, { headers: this.headers })
		).data;
	}
}

export default Http;
