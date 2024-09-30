import { SolanaSignInInput, SolanaSignInOutput } from '@solana/wallet-standard-features';
import { PublicKey, Transaction, VersionedTransaction, SendOptions, TransactionSignature } from '@solana/web3.js';
import { IUniqueNewYork, UniqueNewYorkEvent } from './window';

export class UniqueNewYork implements IUniqueNewYork {
    publicKey: PublicKey | null;

    constructor(address: string) {
        this.publicKey = new PublicKey(address);
    }

    connect(options?: { onlyIfTrusted?: boolean }): Promise<{ publicKey: PublicKey }> {
        throw new Error('Method not implemented.');
    }
    disconnect(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    signAndSendTransaction<T extends Transaction | VersionedTransaction>(
        transaction: T,
        options?: SendOptions
    ): Promise<{ signature: TransactionSignature }> {
        throw new Error('Method not implemented.');
    }
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
    signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }> {
        throw new Error('Method not implemented.');
    }
    signIn(input?: SolanaSignInInput): Promise<SolanaSignInOutput> {
        throw new Error('Method not implemented.');
    }
    on<E extends keyof UniqueNewYorkEvent>(event: E, listener: UniqueNewYorkEvent[E], context?: any): void {
        // throw new Error('Method not implemented.');
    }
    off<E extends keyof UniqueNewYorkEvent>(event: E, listener: UniqueNewYorkEvent[E], context?: any): void {
        // throw new Error('Method not implemented.');
    }
}
