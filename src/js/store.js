import { readable } from 'svelte/store';
import { UAParser } from 'ua-parser-js';

// export const is_mobile = readable(false);
export const is_mobile = readable(false, (set) => {
	let ua_parser = new UAParser();
	let is_mobile = ua_parser.getResult().device.type
		? ua_parser.getResult().device?.type
		: 'desktop';

	set(is_mobile != 'desktop');
});
