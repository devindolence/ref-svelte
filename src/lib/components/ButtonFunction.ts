import { error } from '@sveltejs/kit';

interface ButtonFunctionInterface {
	switchValue(): void
}

class ButtonFunction implements ButtonFunctionInterface {
	value: any;

	switchValue() {
		if (typeof this.value === 'boolean') {
			this.value = !this.value;
			return;
		}

		error(500, `${this.value}는 부적절한 변환값입니다.`);
	}
}