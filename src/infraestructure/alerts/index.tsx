import Swal from 'sweetalert2';

class Alert {
	private static instance: Alert;
	private constructor() {}

	public static getInstance(): Alert {
		if (!Alert.instance) {
			Alert.instance = new Alert();
		}

		return Alert.instance;
	}

	public show(title: string, text: string, type: 'success' | 'error'): void {
		Swal.fire(`${title}`, `${text}`, type);
	}
}

export default Alert;
