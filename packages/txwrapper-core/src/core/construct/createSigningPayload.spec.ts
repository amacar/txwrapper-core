import {
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import { createSigningPayload } from './createSigningPayload';

describe('createSigningPayload', () => {
	it('should work', () => {
		const signingPayload = createSigningPayload(
			balancesTransfer(
				TEST_METHOD_ARGS.balances.transfer,
				TEST_BASE_TX_INFO,
				KUSAMA_TEST_OPTIONS
			),
			KUSAMA_TEST_OPTIONS
		);

		expect(signingPayload).toEqual(
			'0x9004070096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30eb580800d624000006000000e3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f6361fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582'
		);
	});
});
