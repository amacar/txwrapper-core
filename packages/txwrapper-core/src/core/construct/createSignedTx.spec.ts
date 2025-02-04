import {
	KUSAMA_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';

describe('createSignedTx', () => {
	it('should work', async () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);
		const signingPayload = createSigningPayload(unsigned, KUSAMA_TEST_OPTIONS);
		const signature = await signWithAlice(signingPayload);

		const tx = createSignedTx(unsigned, signature, KUSAMA_TEST_OPTIONS);
		expect(tx).toBe(
			'0x2d028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d005b4cf1d210c93eb6e6428a88c1b298e280d761fe50fe02d6c3253075ed23f239bcbc9a4f9bf0494a869f797355daf55ed6de373572328a1f6f4519f48f8f280feb58080004070096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
		);
	});
});
