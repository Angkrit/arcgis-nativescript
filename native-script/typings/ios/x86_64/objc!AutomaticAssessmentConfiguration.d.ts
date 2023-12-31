
declare class AEAssessmentConfiguration extends NSObject implements NSCopying {

	static alloc(): AEAssessmentConfiguration; // inherited from NSObject

	static new(): AEAssessmentConfiguration; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum AEAssessmentErrorCode {

	Unknown = 1
}

declare var AEAssessmentErrorDomain: string;

declare class AEAssessmentSession extends NSObject {

	static alloc(): AEAssessmentSession; // inherited from NSObject

	static new(): AEAssessmentSession; // inherited from NSObject

	readonly active: boolean;

	delegate: AEAssessmentSessionDelegate;

	constructor(o: { configuration: AEAssessmentConfiguration; });

	begin(): void;

	end(): void;

	initWithConfiguration(configuration: AEAssessmentConfiguration): this;
}

interface AEAssessmentSessionDelegate extends NSObjectProtocol {

	assessmentSessionDidBegin?(session: AEAssessmentSession): void;

	assessmentSessionDidEnd?(session: AEAssessmentSession): void;

	assessmentSessionFailedToBeginWithError?(session: AEAssessmentSession, error: NSError): void;

	assessmentSessionWasInterruptedWithError?(session: AEAssessmentSession, error: NSError): void;
}
declare var AEAssessmentSessionDelegate: {

	prototype: AEAssessmentSessionDelegate;
};
