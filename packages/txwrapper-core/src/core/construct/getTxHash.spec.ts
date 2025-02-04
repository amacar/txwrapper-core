import {
	KUSAMA_TEST_OPTIONS,
	signWithAlice,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import { balancesTransfer } from '../../test-helpers';
import { construct } from '..';
import { getTxHash } from './getTxHash';

describe('getTxHash', () => {
	it('should work', async () => {
		const unsigned = balancesTransfer(
			TEST_METHOD_ARGS.balances.transfer,
			TEST_BASE_TX_INFO,
			KUSAMA_TEST_OPTIONS
		);
		const signingPayload = construct.signingPayload(
			unsigned,
			KUSAMA_TEST_OPTIONS
		);
		const signature = await signWithAlice(signingPayload);
		const signedTx = construct.signedTx(
			unsigned,
			signature,
			KUSAMA_TEST_OPTIONS
		);

		const txHash = getTxHash(signedTx);
		expect(txHash).toBe(
			'0x50cbe175485736a5284a5758e29608d4e3f95c329ca42b108f7445f9f2ed06bb'
		);
	});
});
