
declare class AGSAddRastersParameters extends AGSObject {

	static addRastersParameters(): AGSAddRastersParameters;

	static alloc(): AGSAddRastersParameters; // inherited from NSObject

	static new(): AGSAddRastersParameters; // inherited from NSObject

	filter: string;

	inputDirectoryURL: NSURL;

	inputFileURL: NSURL;

	maxPixelSizeFactor: number;

	minPixelSizeFactor: number;

	rasterFunctionTemplateFileURL: NSURL;
}

declare class AGSAnalysis extends AGSObject {

	static alloc(): AGSAnalysis; // inherited from NSObject

	static new(): AGSAnalysis; // inherited from NSObject

	visible: boolean;
}

declare class AGSAnalysisOverlay extends AGSObject {

	static alloc(): AGSAnalysisOverlay; // inherited from NSObject

	static analysisOverlay(): AGSAnalysisOverlay;

	static new(): AGSAnalysisOverlay; // inherited from NSObject

	readonly analyses: NSMutableArray<AGSAnalysis>;

	visible: boolean;
}

declare class AGSAngularUnit extends AGSUnit {

	static alloc(): AGSAngularUnit; // inherited from NSObject

	static degrees(): AGSAngularUnit;

	static new(): AGSAngularUnit; // inherited from NSObject

	static radians(): AGSAngularUnit;

	static unitWithUnitID(unitID: AGSAngularUnitID): AGSAngularUnit;

	static unitWithWKID(WKID: number): AGSAngularUnit;

	readonly unitID: AGSAngularUnitID;

	constructor(o: { unitID: AGSAngularUnitID; });

	convertFromRadians(radians: number): number;

	convertFromUnit(value: number, fromUnit: AGSAngularUnit): number;

	convertToRadians(angle: number): number;

	convertToUnit(angle: number, toUnit: AGSAngularUnit): number;

	initWithUnitID(unitID: AGSAngularUnitID): this;
}

declare const enum AGSAngularUnitID {

	Degrees = 9102,

	Grads = 9105,

	Minutes = 9103,

	Radians = 9101,

	Seconds = 9104,

	Other = 0
}

declare const enum AGSAnimationCurve {

	Linear = 0,

	EaseInQuad = 1,

	EaseOutQuad = 2,

	EaseInOutQuad = 3,

	EaseInCubic = 4,

	EaseOutCubic = 5,

	EaseInOutCubic = 6,

	EaseInQuart = 7,

	EaseOutQuart = 8,

	EaseInOutQuart = 9,

	EaseInQuint = 10,

	EaseOutQuint = 11,

	EaseInOutQuint = 12,

	EaseInSine = 13,

	EaseOutSine = 14,

	EaseInOutSine = 15,

	EaseInExpo = 16,

	EaseOutExpo = 17,

	EaseInOutExpo = 18,

	EaseInCirc = 19,

	EaseOutCirc = 20,

	EaseInOutCirc = 21
}

declare class AGSAnnotationLayer extends AGSLayer implements AGSRemoteResource {

	static alloc(): AGSAnnotationLayer; // inherited from NSObject

	static annotationLayerWithFeatureTable(featureTable: AGSArcGISFeatureTable): AGSAnnotationLayer;

	static annotationLayerWithItemServiceLayerID(item: AGSItem, serviceLayerID: number): AGSAnnotationLayer;

	static annotationLayerWithURL(URL: NSURL): AGSAnnotationLayer;

	static new(): AGSAnnotationLayer; // inherited from NSObject

	readonly featureTable: AGSArcGISFeatureTable;

	readonly referenceScale: number;

	readonly serviceLayerID: number;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { featureTable: AGSArcGISFeatureTable; });

	constructor(o: { item: AGSItem; serviceLayerID: number; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFeatureTable(featureTable: AGSArcGISFeatureTable): this;

	initWithItemServiceLayerID(item: AGSItem, serviceLayerID: number): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSAnnotationSublayer extends AGSObject implements AGSLayerContent {

	static alloc(): AGSAnnotationSublayer; // inherited from NSObject

	static new(): AGSAnnotationSublayer; // inherited from NSObject

	readonly definitionExpression: string;

	readonly maxScale: number;

	readonly minScale: number;

	readonly opacity: number;

	readonly scaleSymbols: boolean;

	readonly sublayerID: number;

	readonly canChangeVisibility: boolean; // inherited from AGSLayerContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly name: string; // inherited from AGSLayerContent

	showInLegend: boolean; // inherited from AGSLayerContent

	readonly subLayerContents: NSArray<AGSLayerContent>; // inherited from AGSLayerContent

	subLayerContentsChangedHandler: () => void; // inherited from AGSLayerContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	visible: boolean; // inherited from AGSLayerContent

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fetchLegendInfosWithCompletion(completion: (p1: NSArray<AGSLegendInfo>, p2: NSError) => void): AGSCancelable;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isVisibleAtScale(scale: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum AGSAntialiasingMode {

	None = 0,

	Fastest = 1,

	Fast = 2,

	Normal = 3,

	Best = 4
}

declare class AGSApplicationDelegate extends NSObject {

	static alloc(): AGSApplicationDelegate; // inherited from NSObject

	static new(): AGSApplicationDelegate; // inherited from NSObject

	static sharedApplicationDelegate(): AGSApplicationDelegate;

	applicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): void;

	applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;
}

declare class AGSArcGISFeature extends AGSFeature implements AGSLoadable {

	static alloc(): AGSArcGISFeature; // inherited from NSObject

	static new(): AGSArcGISFeature; // inherited from NSObject

	readonly canEditAttachments: boolean;

	readonly canUpdateGeometry: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly loadError: NSError; // inherited from AGSLoadable

	readonly loadStatus: AGSLoadStatus; // inherited from AGSLoadable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addAttachmentWithNameContentTypeDataCompletion(name: string, contentType: string, data: NSData, completion: (p1: AGSAttachment, p2: NSError) => void): AGSCancelable;

	cancelLoad(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteAttachmentCompletion(attachment: AGSAttachment, completion: (p1: NSError) => void): AGSCancelable;

	deleteAttachmentsCompletion(attachments: NSArray<AGSAttachment> | AGSAttachment[], completion: (p1: NSError) => void): AGSCancelable;

	fetchAttachmentsWithCompletion(completion: (p1: NSArray<AGSAttachment>, p2: NSError) => void): AGSCancelable;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	refreshObjectID(): boolean;

	relateToFeature(feature: AGSArcGISFeature): void;

	relateToFeatureRelationshipInfo(feature: AGSArcGISFeature, relationshipInfo: AGSRelationshipInfo): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;

	self(): this;

	unrelateToFeature(feature: AGSArcGISFeature): void;

	updateAttachmentNameContentTypeDataCompletion(attachment: AGSAttachment, name: string, contentType: string, data: NSData, completion: (p1: NSError) => void): AGSCancelable;
}

declare class AGSArcGISFeatureLayerInfo extends AGSObject {

	static alloc(): AGSArcGISFeatureLayerInfo; // inherited from NSObject

	static new(): AGSArcGISFeatureLayerInfo; // inherited from NSObject

	readonly CIMVersion: string;

	readonly URL: NSURL;

	readonly allowGeometryUpdates: boolean;

	readonly attribution: string;

	readonly capabilities: AGSFeatureServiceCapabilities;

	readonly dataVersioned: boolean;

	readonly defaultSubtypeCode: any;

	readonly displayFieldName: string;

	readonly drawingInfo: AGSDrawingInfo;

	readonly editFieldsInfo: AGSEditFieldsInfo;

	readonly effectiveMaxScale: number;

	readonly effectiveMinScale: number;

	readonly extent: AGSEnvelope;

	readonly featureSubtypes: NSArray<AGSFeatureSubtype>;

	readonly featureTemplates: NSArray<AGSFeatureTemplate>;

	readonly featureTypes: NSArray<AGSFeatureType>;

	readonly fields: NSArray<AGSField>;

	readonly geometryType: AGSGeometryType;

	readonly globalIDFieldName: string;

	readonly hasAttachments: boolean;

	readonly hasM: boolean;

	readonly hasZ: boolean;

	readonly layerDescription: string;

	readonly maxRecordCount: number;

	readonly maxScale: number;

	readonly minScale: number;

	readonly objectIDFieldName: string;

	readonly ownershipBasedAccessControl: AGSOwnershipBasedAccessControlInfo;

	readonly relationshipInfos: NSArray<AGSRelationshipInfo>;

	readonly serviceLayerID: number;

	readonly serviceLayerName: string;

	readonly serviceSourceType: AGSServiceType;

	readonly serviceType: AGSArcGISFeatureLayerInfoServiceType;

	readonly subtypeField: string;

	readonly supportsAdvancedQueries: boolean;

	readonly supportsOBACForAnonymousUsers: boolean;

	readonly supportsPagination: boolean;

	readonly supportsQueryExtent: boolean;

	readonly supportsRollbackOnFailureParameter: boolean;

	readonly supportsStatistics: boolean;

	readonly timeInfo: AGSLayerTimeInfo;

	readonly typeIDFieldName: string;

	readonly version: string;

	readonly visibleByDefault: boolean;

	readonly zDefault: number;

	readonly zDefaultsEnabled: boolean;

	featureTypeWithName(name: string): AGSFeatureType;

	fieldWithName(name: string): AGSField;
}

declare const enum AGSArcGISFeatureLayerInfoServiceType {

	Layer = 0,

	Table = 1,

	GroupLayer = 2,

	AnnotationLayer = 3,

	Unknown = -1
}

declare class AGSArcGISFeatureServiceInfo extends AGSObject {

	static alloc(): AGSArcGISFeatureServiceInfo; // inherited from NSObject

	static new(): AGSArcGISFeatureServiceInfo; // inherited from NSObject

	readonly URL: NSURL;

	readonly allowGeometryUpdates: boolean;

	readonly attribution: string;

	readonly dataFrameDescription: string;

	readonly documentInfo: AGSServiceDocumentInfo;

	readonly editorTrackingInfo: AGSEditorTrackingInfo;

	readonly featureServiceCapabilities: AGSFeatureServiceCapabilities;

	readonly fullExtent: AGSEnvelope;

	readonly hasStaticData: boolean;

	readonly hasVersionedData: boolean;

	readonly initialExtent: AGSEnvelope;

	readonly layerInfos: NSArray<AGSIDInfo>;

	readonly maxRecordCount: number;

	readonly serviceDescription: string;

	readonly spatialReference: AGSSpatialReference;

	readonly supportsDisconnectedEditing: boolean;

	readonly syncCapabilities: AGSSyncCapabilities;

	readonly syncEnabled: boolean;

	readonly tableInfos: NSArray<AGSIDInfo>;

	readonly unit: AGSUnit;

	readonly version: string;

	readonly zDefault: number;

	readonly zDefaultsEnabled: boolean;
}

declare class AGSArcGISFeatureTable extends AGSFeatureTable {

	static alloc(): AGSArcGISFeatureTable; // inherited from NSObject

	static new(): AGSArcGISFeatureTable; // inherited from NSObject

	readonly defaultSubtypeCode: any;

	readonly editableAttributeFields: NSArray<AGSField>;

	readonly featureSubtypes: NSArray<AGSFeatureSubtype>;

	readonly featureTemplates: NSArray<AGSFeatureTemplate>;

	readonly featureTypes: NSArray<AGSFeatureType>;

	readonly globalIDField: string;

	readonly hasAttachments: boolean;

	readonly layerInfo: AGSArcGISFeatureLayerInfo;

	readonly objectIDField: string;

	readonly serviceLayerID: number;

	readonly subtypeField: string;

	readonly typeIDField: string;

	useAdvancedSymbology: boolean;

	addedFeaturesCountWithCompletion(completion: (p1: number, p2: NSError) => void): AGSCancelable;

	addedFeaturesWithCompletion(completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	createFeatureWithSubtype(featureSubtype: AGSFeatureSubtype): AGSArcGISFeature;

	createFeatureWithSubtypeGeometry(featureSubtype: AGSFeatureSubtype, geometry: AGSGeometry): AGSArcGISFeature;

	createFeatureWithTemplate(featureTemplate: AGSFeatureTemplate): AGSArcGISFeature;

	createFeatureWithTemplateGeometry(featureTemplate: AGSFeatureTemplate, geometry: AGSGeometry): AGSArcGISFeature;

	createFeatureWithType(featureType: AGSFeatureType): AGSArcGISFeature;

	createFeatureWithTypeGeometry(featureType: AGSFeatureType, geometry: AGSGeometry): AGSArcGISFeature;

	deletedFeaturesCountWithCompletion(completion: (p1: number, p2: NSError) => void): AGSCancelable;

	deletedFeaturesWithCompletion(completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	featureTemplateForName(name: string): AGSFeatureTemplate;

	featureTypeForName(name: string): AGSFeatureType;

	queryRelatedFeatureCountForFeatureCompletion(feature: AGSArcGISFeature, completion: (p1: number, p2: NSError) => void): AGSCancelable;

	queryRelatedFeatureCountForFeatureParametersCompletion(feature: AGSArcGISFeature, parameters: AGSRelatedQueryParameters, completion: (p1: number, p2: NSError) => void): AGSCancelable;

	queryRelatedFeaturesForFeatureCompletion(feature: AGSArcGISFeature, completion: (p1: NSArray<AGSRelatedFeatureQueryResult>, p2: NSError) => void): AGSCancelable;

	queryRelatedFeaturesForFeatureParametersCompletion(feature: AGSArcGISFeature, parameters: AGSRelatedQueryParameters, completion: (p1: NSArray<AGSRelatedFeatureQueryResult>, p2: NSError) => void): AGSCancelable;

	relatedTables(): NSArray<AGSArcGISFeatureTable>;

	relatedTablesWithRelationshipInfo(relationshipInfo: AGSRelationshipInfo): NSArray<AGSArcGISFeatureTable>;

	updatedFeaturesCountWithCompletion(completion: (p1: number, p2: NSError) => void): AGSCancelable;

	updatedFeaturesWithCompletion(completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	validateRelationshipConstraintsForFeatureCompletion(feature: AGSArcGISFeature, completion: (p1: AGSRelationshipConstraintViolationType, p2: NSError) => void): AGSCancelable;
}

declare class AGSArcGISImageServiceInfo extends AGSObject {

	static alloc(): AGSArcGISImageServiceInfo; // inherited from NSObject

	static new(): AGSArcGISImageServiceInfo; // inherited from NSObject

	readonly URL: NSURL;

	readonly attribution: string;

	readonly currentVersion: string;

	readonly fields: NSArray<AGSField>;

	readonly fullExtent: AGSEnvelope;

	readonly maxScale: number;

	readonly minScale: number;

	readonly name: string;

	readonly pixelType: AGSPixelType;

	readonly renderingRuleInfos: NSArray<AGSRenderingRuleInfo>;

	readonly spatialReference: AGSSpatialReference;

	readonly timeInfo: AGSLayerTimeInfo;
}

declare class AGSArcGISMapImageLayer extends AGSImageAdjustmentLayer implements AGSRemoteResource, AGSTimeAware {

	static ArcGISMapImageLayerWithItem(item: AGSItem): AGSArcGISMapImageLayer;

	static ArcGISMapImageLayerWithURL(URL: NSURL): AGSArcGISMapImageLayer;

	static alloc(): AGSArcGISMapImageLayer; // inherited from NSObject

	static new(): AGSArcGISMapImageLayer; // inherited from NSObject

	geodatabaseVersion: string;

	imageFormat: AGSMapServiceImageFormat;

	readonly mapImageSublayers: NSMutableArray<AGSArcGISMapImageSublayer>;

	readonly mapServiceInfo: AGSArcGISMapServiceInfo;

	refreshInterval: number;

	readonly tables: NSArray<AGSServiceFeatureTable>;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fullTimeExtent: AGSTimeExtent; // inherited from AGSTimeAware

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly supportsTimeFiltering: boolean; // inherited from AGSTimeAware

	timeFilteringEnabled: boolean; // inherited from AGSTimeAware

	readonly timeInterval: AGSTimeValue; // inherited from AGSTimeAware

	timeOffset: AGSTimeValue; // inherited from AGSTimeAware

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItem(item: AGSItem): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadTablesAndLayersWithCompletion(completion: (p1: NSError) => void): AGSCancelable;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetSublayers(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSArcGISMapImageSublayer extends AGSArcGISSublayer {

	static ArcGISMapImageSublayerWithID(ID: number): AGSArcGISMapImageSublayer;

	static ArcGISMapImageSublayerWithIDSource(ID: number, source: AGSSublayerSource): AGSArcGISMapImageSublayer;

	static alloc(): AGSArcGISMapImageSublayer; // inherited from NSObject

	static new(): AGSArcGISMapImageSublayer; // inherited from NSObject

	definitionExpression: string;

	readonly labelDefinitions: NSMutableArray<AGSLabelDefinition>;

	labelsEnabled: boolean;

	maxScale: number;

	minScale: number;

	name: string;

	opacity: number;

	renderer: AGSRenderer;

	scaleSymbols: boolean;

	readonly source: AGSSublayerSource;

	readonly table: AGSServiceFeatureTable;

	readonly visibleByDefault: boolean;

	constructor(o: { ID: number; });

	constructor(o: { ID: number; source: AGSSublayerSource; });

	initWithID(ID: number): this;

	initWithIDSource(ID: number, source: AGSSublayerSource): this;
}

declare class AGSArcGISMapServiceCapabilities extends AGSObject {

	static alloc(): AGSArcGISMapServiceCapabilities; // inherited from NSObject

	static new(): AGSArcGISMapServiceCapabilities; // inherited from NSObject

	readonly supportsData: boolean;

	readonly supportsMap: boolean;

	readonly supportsQuery: boolean;

	readonly supportsTilemap: boolean;

	readonly supportsTilesOnly: boolean;
}

declare class AGSArcGISMapServiceInfo extends AGSObject implements AGSJSONSerializable {

	static alloc(): AGSArcGISMapServiceInfo; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSArcGISMapServiceInfo; // inherited from NSObject

	readonly URL: NSURL;

	readonly attribution: string;

	readonly capabilities: AGSArcGISMapServiceCapabilities;

	readonly contentDescription: string;

	readonly currentVersion: string;

	readonly documentInfo: AGSServiceDocumentInfo;

	readonly exportTilesAllowed: boolean;

	readonly fullExtent: AGSEnvelope;

	readonly initialExtent: AGSEnvelope;

	readonly layerInfos: NSArray<AGSMapServiceLayerIDInfo>;

	readonly mapName: string;

	readonly maxExportTilesCount: number;

	readonly maxImageHeight: number;

	readonly maxImageWidth: number;

	readonly maxRecordCount: number;

	readonly maxScale: number;

	readonly minScale: number;

	readonly serviceDescription: string;

	readonly serviceSourceType: AGSServiceType;

	readonly singleFusedMapCache: boolean;

	readonly spatialReference: AGSSpatialReference;

	readonly supportedImageFormatTypes: NSArray<string>;

	readonly supportsDynamicLayers: boolean;

	readonly tableInfos: NSArray<AGSMapServiceLayerIDInfo>;

	readonly tileInfo: AGSTileInfo;

	readonly tileServers: NSArray<NSURL>;

	readonly timeInfo: AGSServiceTimeInfo;

	readonly unit: AGSUnit;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare class AGSArcGISMapServiceSublayerInfo extends AGSObject implements AGSJSONSerializable {

	static alloc(): AGSArcGISMapServiceSublayerInfo; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSArcGISMapServiceSublayerInfo; // inherited from NSObject

	readonly URL: NSURL;

	readonly attribution: string;

	readonly canModifyLayer: boolean;

	readonly canScaleSymbols: boolean;

	readonly capabilities: AGSArcGISMapServiceCapabilities;

	readonly dataVersioned: boolean;

	readonly defaultSubtypeCode: any;

	readonly defaultVisibility: boolean;

	readonly definitionExpression: string;

	readonly displayFieldName: string;

	readonly drawingInfo: AGSDrawingInfo;

	readonly effectiveMaxScale: number;

	readonly effectiveMinScale: number;

	readonly extent: AGSEnvelope;

	readonly featureSubtypes: NSArray<AGSFeatureSubtype>;

	readonly featureTypes: NSArray<AGSFeatureType>;

	readonly fields: NSArray<AGSField>;

	readonly geometryType: AGSGeometryType;

	readonly hasAttachments: boolean;

	readonly hasLabels: boolean;

	readonly hasM: boolean;

	readonly hasZ: boolean;

	readonly maxRecordCount: number;

	readonly maxScale: number;

	readonly minScale: number;

	readonly ownershipBasedAccessControl: AGSOwnershipBasedAccessControlInfo;

	readonly parentLayerInfo: AGSIDInfo;

	readonly relationshipInfos: NSArray<AGSRelationshipInfo>;

	readonly serviceDescription: string;

	readonly serviceLayerID: number;

	readonly serviceLayerName: string;

	readonly sublayerInfos: NSArray<AGSIDInfo>;

	readonly sublayerType: AGSArcGISMapServiceSublayerType;

	readonly subtypeField: string;

	readonly supportsAdvancedQueries: boolean;

	readonly supportsStatistics: boolean;

	readonly timeInfo: AGSLayerTimeInfo;

	readonly typeIDFieldName: string;

	readonly useStandardizedQueries: boolean;

	readonly version: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fieldWithName(name: string): AGSField;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare const enum AGSArcGISMapServiceSublayerType {

	FeatureLayer = 0,

	Table = 1,

	GroupLayer = 2,

	RasterLayer = 3,

	NetworkAnalysisLayer = 4,

	Unknown = -1
}

declare class AGSArcGISRuntimeEnvironment extends NSObject {

	static alloc(): AGSArcGISRuntimeEnvironment; // inherited from NSObject

	static license(): AGSLicense;

	static new(): AGSArcGISRuntimeEnvironment; // inherited from NSObject

	static setLicenseInfoError(licenseInfo: AGSLicenseInfo): AGSLicenseResult;

	static setLicenseKeyError(licenseKey: string): AGSLicenseResult;

	static setLicenseKeyExtensionsError(licenseKey: string, extensions: NSArray<string> | string[]): AGSLicenseResult;
}

declare class AGSArcGISSceneLayer extends AGSLayer implements AGSRemoteResource {

	static ArcGISSceneLayerWithItem(item: AGSItem): AGSArcGISSceneLayer;

	static ArcGISSceneLayerWithName(name: string): AGSArcGISSceneLayer;

	static ArcGISSceneLayerWithURL(url: NSURL): AGSArcGISSceneLayer;

	static alloc(): AGSArcGISSceneLayer; // inherited from NSObject

	static new(): AGSArcGISSceneLayer; // inherited from NSObject

	altitudeOffset: number;

	readonly dataType: AGSSceneLayerDataType;

	readonly featureTable: AGSFeatureTable;

	surfacePlacement: AGSSurfacePlacement;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { name: string; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	clearSelection(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getSelectedFeaturesWithCompletion(completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	initWithItem(item: AGSItem): this;

	initWithName(name: string): this;

	initWithURL(url: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectFeature(feature: AGSFeature): void;

	selectFeatures(features: NSArray<AGSFeature> | AGSFeature[]): void;

	self(): this;

	unselectFeature(feature: AGSFeature): void;

	unselectFeatures(features: NSArray<AGSFeature> | AGSFeature[]): void;
}

declare class AGSArcGISSublayer extends AGSLoadableBase implements AGSLayerContent, AGSPopupSource, NSCopying {

	static alloc(): AGSArcGISSublayer; // inherited from NSObject

	static new(): AGSArcGISSublayer; // inherited from NSObject

	readonly definitionExpression: string;

	readonly labelsEnabled: boolean;

	readonly mapServiceSublayerInfo: AGSArcGISMapServiceSublayerInfo;

	readonly maxScale: number;

	readonly minScale: number;

	readonly opacity: number;

	readonly renderer: AGSRenderer;

	readonly scaleSymbols: boolean;

	readonly sublayerID: number;

	readonly sublayers: NSMutableArray<AGSArcGISSublayer>;

	readonly canChangeVisibility: boolean; // inherited from AGSLayerContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly name: string; // inherited from AGSLayerContent

	popupDefinition: AGSPopupDefinition; // inherited from AGSPopupSource

	popupEnabled: boolean; // inherited from AGSPopupSource

	showInLegend: boolean; // inherited from AGSLayerContent

	readonly subLayerContents: NSArray<AGSLayerContent>; // inherited from AGSLayerContent

	subLayerContentsChangedHandler: () => void; // inherited from AGSLayerContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	visible: boolean; // inherited from AGSLayerContent

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	fetchLegendInfosWithCompletion(completion: (p1: NSArray<AGSLegendInfo>, p2: NSError) => void): AGSCancelable;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isVisibleAtScale(scale: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSArcGISTiledElevationSource extends AGSElevationSource implements AGSRemoteResource {

	static ArcGISTiledElevationSource(): AGSArcGISTiledElevationSource;

	static ArcGISTiledElevationSourceWithItem(item: AGSItem): AGSArcGISTiledElevationSource;

	static ArcGISTiledElevationSourceWithName(name: string): AGSArcGISTiledElevationSource;

	static ArcGISTiledElevationSourceWithTileCache(tileCache: AGSTileCache): AGSArcGISTiledElevationSource;

	static ArcGISTiledElevationSourceWithURL(URL: NSURL): AGSArcGISTiledElevationSource;

	static alloc(): AGSArcGISTiledElevationSource; // inherited from NSObject

	static new(): AGSArcGISTiledElevationSource; // inherited from NSObject

	readonly item: AGSItem;

	readonly tileCache: AGSTileCache;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { name: string; });

	constructor(o: { tileCache: AGSTileCache; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItem(item: AGSItem): this;

	initWithName(name: string): this;

	initWithTileCache(tileCache: AGSTileCache): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSArcGISTiledLayer extends AGSImageTiledLayer implements AGSRemoteResource {

	static ArcGISTiledLayerWithItem(item: AGSItem): AGSArcGISTiledLayer;

	static ArcGISTiledLayerWithName(name: string): AGSArcGISTiledLayer;

	static ArcGISTiledLayerWithTileCache(tileCache: AGSTileCache): AGSArcGISTiledLayer;

	static ArcGISTiledLayerWithURL(URL: NSURL): AGSArcGISTiledLayer;

	static alloc(): AGSArcGISTiledLayer; // inherited from NSObject

	static imageTiledLayerWithTileInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSArcGISTiledLayer; // inherited from AGSImageTiledLayer

	static new(): AGSArcGISTiledLayer; // inherited from NSObject

	readonly mapServiceInfo: AGSArcGISMapServiceInfo;

	refreshInterval: number;

	readonly tileCache: AGSTileCache;

	readonly tiledSublayers: NSArray<AGSArcGISTiledSublayer>;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { name: string; });

	constructor(o: { tileCache: AGSTileCache; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItem(item: AGSItem): this;

	initWithName(name: string): this;

	initWithTileCache(tileCache: AGSTileCache): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSArcGISTiledSublayer extends AGSArcGISSublayer {

	static alloc(): AGSArcGISTiledSublayer; // inherited from NSObject

	static new(): AGSArcGISTiledSublayer; // inherited from NSObject
}

declare class AGSArcGISVectorTiledLayer extends AGSLayer implements AGSRemoteResource {

	static ArcGISVectorTiledLayerWithItem(item: AGSItem): AGSArcGISVectorTiledLayer;

	static ArcGISVectorTiledLayerWithName(name: string): AGSArcGISVectorTiledLayer;

	static ArcGISVectorTiledLayerWithURL(url: NSURL): AGSArcGISVectorTiledLayer;

	static ArcGISVectorTiledLayerWithVectorTileCache(vectorTileCache: AGSVectorTileCache): AGSArcGISVectorTiledLayer;

	static ArcGISVectorTiledLayerWithVectorTileCacheItemResourceCache(vectorTileCache: AGSVectorTileCache, itemResourceCache: AGSItemResourceCache): AGSArcGISVectorTiledLayer;

	static alloc(): AGSArcGISVectorTiledLayer; // inherited from NSObject

	static new(): AGSArcGISVectorTiledLayer; // inherited from NSObject

	readonly itemResourceCache: AGSItemResourceCache;

	readonly sourceInfo: AGSVectorTileSourceInfo;

	readonly style: AGSVectorTileStyle;

	readonly vectorTileCache: AGSVectorTileCache;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { name: string; });

	constructor(o: { URL: NSURL; });

	constructor(o: { vectorTileCache: AGSVectorTileCache; });

	constructor(o: { vectorTileCache: AGSVectorTileCache; itemResourceCache: AGSItemResourceCache; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItem(item: AGSItem): this;

	initWithName(name: string): this;

	initWithURL(url: NSURL): this;

	initWithVectorTileCache(vectorTileCache: AGSVectorTileCache): this;

	initWithVectorTileCacheItemResourceCache(vectorTileCache: AGSVectorTileCache, itemResourceCache: AGSItemResourceCache): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSAreaUnit extends AGSUnit {

	static alloc(): AGSAreaUnit; // inherited from NSObject

	static areaUnitWithLinearUnit(linearUnit: AGSLinearUnit): AGSAreaUnit;

	static new(): AGSAreaUnit; // inherited from NSObject

	static squareFeet(): AGSAreaUnit;

	static squareKilometers(): AGSAreaUnit;

	static squareMeters(): AGSAreaUnit;

	static squareMiles(): AGSAreaUnit;

	static unitWithUnitID(unitID: AGSAreaUnitID): AGSAreaUnit;

	static unitWithWKID(WKID: number): AGSAreaUnit;

	readonly unitID: AGSAreaUnitID;

	constructor(o: { linearUnit: AGSLinearUnit; });

	constructor(o: { unitID: AGSAreaUnitID; });

	convertFromSquareMeters(area: number): number;

	convertFromUnit(area: number, fromUnit: AGSAreaUnit): number;

	convertToSquareMeters(area: number): number;

	convertToUnit(area: number, toUnit: AGSAreaUnit): number;

	initWithLinearUnit(linearUnit: AGSLinearUnit): this;

	initWithUnitID(unitID: AGSAreaUnitID): this;

	toLinearUnit(): AGSLinearUnit;
}

declare const enum AGSAreaUnitID {

	Acres = 109402,

	Hectares = 109401,

	SquareCentimeters = 109451,

	SquareDecimeters = 109450,

	SquareFeet = 109405,

	SquareKilometers = 109414,

	SquareMeters = 109404,

	SquareMillimeters = 109452,

	SquareMiles = 109439,

	SquareYards = 109442,

	Other = 0
}

declare const enum AGSAtmosphereEffect {

	None = 0,

	HorizonOnly = 1,

	Realistic = 2
}

declare class AGSAttachment extends AGSObject {

	static alloc(): AGSAttachment; // inherited from NSObject

	static new(): AGSAttachment; // inherited from NSObject

	readonly attachmentID: number;

	readonly contentType: string;

	readonly hasFetchedData: boolean;

	readonly name: string;

	readonly size: number;

	fetchDataWithCompletion(completion: (p1: NSData, p2: NSError) => void): AGSCancelable;
}

declare const enum AGSAttachmentSyncDirection {

	None = 0,

	Upload = 1,

	Bidirectional = 2
}

declare class AGSAttributeParameterValue extends AGSObject {

	static alloc(): AGSAttributeParameterValue; // inherited from NSObject

	static attributeParameterValue(): AGSAttributeParameterValue;

	static new(): AGSAttributeParameterValue; // inherited from NSObject

	attributeName: string;

	parameterName: string;

	parameterValue: any;
}

declare const enum AGSAttributeUnit {

	Unknown = 0,

	Inches = 1,

	Feet = 2,

	Yards = 3,

	Miles = 4,

	Millimeters = 5,

	Centimeters = 6,

	Decimeters = 7,

	Meters = 8,

	Kilometers = 9,

	NauticalMiles = 10,

	DecimalDegrees = 11,

	Seconds = 12,

	Minutes = 13,

	Hours = 14,

	Days = 15
}

declare class AGSAuthenticationChallenge extends NSObject {

	static alloc(): AGSAuthenticationChallenge; // inherited from NSObject

	static new(): AGSAuthenticationChallenge; // inherited from NSObject

	readonly authenticatingHost: string;

	readonly error: NSError;

	readonly failureCount: number;

	readonly portalURL: NSURL;

	readonly proposedCredential: AGSCredential;

	readonly protectionSpace: NSURLProtectionSpace;

	readonly remoteResource: AGSRemoteResource;

	readonly request: NSURLRequest;

	readonly type: AGSAuthenticationChallengeType;

	cancel(): void;

	continueWithCredential(credential: AGSCredential): void;

	continueWithDefaultHandling(): void;

	isRemoteResourceFederatedWithPortalURL(portalURL: NSURL): boolean;

	trustHostAndContinue(): void;
}

declare const enum AGSAuthenticationChallengeType {

	UsernamePassword = 0,

	OAuth = 1,

	ClientCertificate = 2,

	UntrustedHost = 3,

	Unknown = 4
}

declare class AGSAuthenticationManager extends NSObject {

	static alloc(): AGSAuthenticationManager; // inherited from NSObject

	static new(): AGSAuthenticationManager; // inherited from NSObject

	static sharedAuthenticationManager(): AGSAuthenticationManager;

	readonly OAuthConfigurations: NSMutableArray<AGSOAuthConfiguration>;

	readonly credentialCache: AGSCredentialCache;

	delegate: AGSAuthenticationManagerDelegate;

	readonly trustedHosts: NSMutableArray<string>;
}

interface AGSAuthenticationManagerDelegate extends NSObjectProtocol {

	authenticationManagerDidReceiveAuthenticationChallenge?(authenticationManager: AGSAuthenticationManager, challenge: AGSAuthenticationChallenge): void;

	authenticationManagerWantsToDismissViewController?(authenticationManager: AGSAuthenticationManager, viewController: UIViewController): void;

	authenticationManagerWantsToShowViewController?(authenticationManager: AGSAuthenticationManager, viewController: UIViewController): void;
}
declare var AGSAuthenticationManagerDelegate: {

	prototype: AGSAuthenticationManagerDelegate;
};

declare class AGSBackgroundGrid extends AGSObject {

	static alloc(): AGSBackgroundGrid; // inherited from NSObject

	static backgroundGridWithColorGridLineColorGridLineWidthGridSize(color: UIColor, gridLineColor: UIColor, gridLineWidth: number, gridSize: number): AGSBackgroundGrid;

	static new(): AGSBackgroundGrid; // inherited from NSObject

	color: UIColor;

	gridLineColor: UIColor;

	gridLineWidth: number;

	gridSize: number;

	visible: boolean;

	constructor(o: { color: UIColor; gridLineColor: UIColor; gridLineWidth: number; gridSize: number; });

	initWithColorGridLineColorGridLineWidthGridSize(color: UIColor, gridLineColor: UIColor, gridLineWidth: number, gridSize: number): this;
}

declare const enum AGSBarrierType {

	Restriction = 0,

	CostAdjustment = 1
}

declare class AGSBaseStretchRenderer extends AGSRasterRenderer {

	static alloc(): AGSBaseStretchRenderer; // inherited from NSObject

	static baseStretchRenderer(): AGSBaseStretchRenderer;

	static new(): AGSBaseStretchRenderer; // inherited from NSObject

	static rasterRenderer(): AGSBaseStretchRenderer; // inherited from AGSRasterRenderer

	readonly estimateStatistics: boolean;

	readonly gammas: NSArray<number>;

	readonly stretchParameters: AGSStretchParameters;
}

declare class AGSBasemap extends AGSLoadableBase implements AGSJSONSerializable, NSCopying {

	static alloc(): AGSBasemap; // inherited from NSObject

	static basemap(): AGSBasemap;

	static basemapWithBaseLayer(layer: AGSLayer): AGSBasemap;

	static basemapWithBaseLayersReferenceLayers(baseLayers: NSArray<AGSLayer> | AGSLayer[], referenceLayers: NSArray<AGSLayer> | AGSLayer[]): AGSBasemap;

	static basemapWithItem(item: AGSItem): AGSBasemap;

	static basemapWithURL(URL: NSURL): AGSBasemap;

	static darkGrayCanvasVectorBasemap(): AGSBasemap;

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static imageryBasemap(): AGSBasemap;

	static imageryWithLabelsBasemap(): AGSBasemap;

	static imageryWithLabelsVectorBasemap(): AGSBasemap;

	static lightGrayCanvasBasemap(): AGSBasemap;

	static lightGrayCanvasVectorBasemap(): AGSBasemap;

	static nationalGeographicBasemap(): AGSBasemap;

	static navigationVectorBasemap(): AGSBasemap;

	static new(): AGSBasemap; // inherited from NSObject

	static oceansBasemap(): AGSBasemap;

	static openStreetMapBasemap(): AGSBasemap;

	static streetsBasemap(): AGSBasemap;

	static streetsNightVectorBasemap(): AGSBasemap;

	static streetsVectorBasemap(): AGSBasemap;

	static streetsWithReliefVectorBasemap(): AGSBasemap;

	static terrainWithLabelsBasemap(): AGSBasemap;

	static terrainWithLabelsVectorBasemap(): AGSBasemap;

	static topographicBasemap(): AGSBasemap;

	static topographicVectorBasemap(): AGSBasemap;

	readonly baseLayers: NSMutableArray<AGSLayer>;

	readonly item: AGSItem;

	name: string;

	readonly referenceLayers: NSMutableArray<AGSLayer>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { baseLayer: AGSLayer; });

	constructor(o: { baseLayers: NSArray<AGSLayer> | AGSLayer[]; referenceLayers: NSArray<AGSLayer> | AGSLayer[]; });

	constructor(o: { item: AGSItem; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithBaseLayer(layer: AGSLayer): this;

	initWithBaseLayersReferenceLayers(baseLayers: NSArray<AGSLayer> | AGSLayer[], referenceLayers: NSArray<AGSLayer> | AGSLayer[]): this;

	initWithItem(item: AGSItem): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare const enum AGSBasemapType {

	Imagery = 0,

	ImageryWithLabels = 1,

	Streets = 2,

	Topographic = 3,

	TerrainWithLabels = 4,

	LightGrayCanvas = 5,

	NationalGeographic = 6,

	Oceans = 7,

	OpenStreetMap = 8,

	ImageryWithLabelsVector = 9,

	StreetsVector = 10,

	TopographicVector = 11,

	TerrainWithLabelsVector = 12,

	LightGrayCanvasVector = 13,

	NavigationVector = 14,

	StreetsNightVector = 15,

	StreetsWithReliefVector = 16,

	DarkGrayCanvasVector = 17
}

declare class AGSBingMapsLayer extends AGSServiceImageTiledLayer {

	static alloc(): AGSBingMapsLayer; // inherited from NSObject

	static bingMapsLayerWithKeyStyle(key: string, style: AGSBingMapsLayerStyle): AGSBingMapsLayer;

	static bingMapsLayerWithPortalStyle(portal: AGSPortal, style: AGSBingMapsLayerStyle): AGSBingMapsLayer;

	static imageTiledLayerWithTileInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSBingMapsLayer; // inherited from AGSImageTiledLayer

	static new(): AGSBingMapsLayer; // inherited from NSObject

	static serviceImageTiledLayerWithTiledInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSBingMapsLayer; // inherited from AGSServiceImageTiledLayer

	key: string;

	locale: NSLocale;

	readonly portal: AGSPortal;

	readonly style: AGSBingMapsLayerStyle;

	constructor(o: { key: string; style: AGSBingMapsLayerStyle; });

	constructor(o: { portal: AGSPortal; style: AGSBingMapsLayerStyle; });

	initWithKeyStyle(key: string, style: AGSBingMapsLayerStyle): this;

	initWithPortalStyle(portal: AGSPortal, style: AGSBingMapsLayerStyle): this;
}

declare const enum AGSBingMapsLayerStyle {

	Aerial = 0,

	Hybrid = 1,

	Road = 2,

	Unknown = -1
}

declare class AGSBlendRenderer extends AGSHillshadeRenderer {

	static alloc(): AGSBlendRenderer; // inherited from NSObject

	static blendRendererWithElevationRasterOutputMinValuesOutputMaxValuesSourceMinValuesSourceMaxValuesNoDataValuesGammasColorRampAltitudeAzimuthZFactorSlopeTypePixelSizeFactorPixelSizePowerOutputBitDepth(elevationRaster: AGSRaster, outputMinValues: NSArray<number> | number[], outputMaxValues: NSArray<number> | number[], sourceMinValues: NSArray<number> | number[], sourceMaxValues: NSArray<number> | number[], noDataValues: NSArray<number> | number[], gammas: NSArray<number> | number[], colorRamp: AGSColorRamp, altitude: number, azimuth: number, zFactor: number, slopeType: AGSSlopeType, pixelSizeFactor: number, pixelSizePower: number, outputBitDepth: number): AGSBlendRenderer;

	static hillshadeRendererWithAltitudeAzimuthZFactorSlopeTypePixelSizeFactorPixelSizePowerOutputBitDepth(altitude: number, azimuth: number, zFactor: number, slopeType: AGSSlopeType, pixelSizeFactor: number, pixelSizePower: number, outputBitDepth: number): AGSBlendRenderer; // inherited from AGSHillshadeRenderer

	static new(): AGSBlendRenderer; // inherited from NSObject

	static rasterRenderer(): AGSBlendRenderer; // inherited from AGSRasterRenderer

	readonly elevationRaster: AGSRaster;

	readonly gammas: NSArray<number>;

	readonly noDataValues: NSArray<number>;

	readonly outputMaxValues: NSArray<number>;

	readonly outputMinValues: NSArray<number>;

	readonly sourceMaxValues: NSArray<number>;

	readonly sourceMinValues: NSArray<number>;

	constructor(o: { elevationRaster: AGSRaster; outputMinValues: NSArray<number> | number[]; outputMaxValues: NSArray<number> | number[]; sourceMinValues: NSArray<number> | number[]; sourceMaxValues: NSArray<number> | number[]; noDataValues: NSArray<number> | number[]; gammas: NSArray<number> | number[]; colorRamp: AGSColorRamp; altitude: number; azimuth: number; zFactor: number; slopeType: AGSSlopeType; pixelSizeFactor: number; pixelSizePower: number; outputBitDepth: number; });

	initWithElevationRasterOutputMinValuesOutputMaxValuesSourceMinValuesSourceMaxValuesNoDataValuesGammasColorRampAltitudeAzimuthZFactorSlopeTypePixelSizeFactorPixelSizePowerOutputBitDepth(elevationRaster: AGSRaster, outputMinValues: NSArray<number> | number[], outputMaxValues: NSArray<number> | number[], sourceMinValues: NSArray<number> | number[], sourceMaxValues: NSArray<number> | number[], noDataValues: NSArray<number> | number[], gammas: NSArray<number> | number[], colorRamp: AGSColorRamp, altitude: number, azimuth: number, zFactor: number, slopeType: AGSSlopeType, pixelSizeFactor: number, pixelSizePower: number, outputBitDepth: number): this;
}

declare class AGSBookmark extends AGSObject implements NSCopying {

	static alloc(): AGSBookmark; // inherited from NSObject

	static bookmark(): AGSBookmark;

	static bookmarkWithNameViewpoint(name: string, viewpoint: AGSViewpoint): AGSBookmark;

	static new(): AGSBookmark; // inherited from NSObject

	name: string;

	viewpoint: AGSViewpoint;

	constructor(o: { name: string; viewpoint: AGSViewpoint; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithNameViewpoint(name: string, viewpoint: AGSViewpoint): this;
}

declare function AGSBundle(): NSBundle;

declare class AGSCLLocationDataSource extends AGSLocationDataSource {

	static alloc(): AGSCLLocationDataSource; // inherited from NSObject

	static new(): AGSCLLocationDataSource; // inherited from NSObject

	readonly locationManager: CLLocationManager;
}

declare const enum AGSCacheStorageFormat {

	Compact = 0,

	CompactV2 = 1,

	Exploded = 2,

	Unknown = -1
}

declare class AGSCallout extends UIView {

	static alloc(): AGSCallout; // inherited from NSObject

	static appearance(): AGSCallout; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AGSCallout; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AGSCallout; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSCallout; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AGSCallout; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSCallout; // inherited from UIAppearance

	static new(): AGSCallout; // inherited from NSObject

	accessoryButtonHidden: boolean;

	accessoryButtonImage: UIImage;

	accessoryButtonType: UIButtonType;

	autoAdjustWidth: boolean;

	borderColor: UIColor;

	borderWidth: number;

	color: UIColor;

	cornerRadius: number;

	customView: UIView;

	delegate: AGSCalloutDelegate;

	detail: string;

	detailColor: UIColor;

	highlight: UIColor;

	image: UIImage;

	leaderPositionFlags: AGSCalloutLeaderPosition;

	readonly mapLocation: AGSPoint;

	margin: CGSize;

	maxWidth: number;

	readonly representedObject: any;

	readonly screenOffset: CGPoint;

	title: string;

	titleColor: UIColor;

	width: number;

	dismiss(): void;

	showCalloutAtScreenOffsetRotateOffsetWithMapAnimated(mapLocation: AGSPoint, screenOffset: CGPoint, rotateOffsetWithMap: boolean, animated: boolean): void;

	showCalloutForFeatureTapLocationAnimated(feature: AGSFeature, mapTapLocation: AGSPoint, animated: boolean): boolean;

	showCalloutForGraphicTapLocationAnimated(graphic: AGSGraphic, mapTapLocation: AGSPoint, animated: boolean): boolean;

	showCalloutForLocationDisplay(): boolean;
}

interface AGSCalloutDelegate extends NSObjectProtocol {

	calloutDidDismiss?(callout: AGSCallout): void;

	calloutWillDismiss?(callout: AGSCallout): void;

	calloutWillShowAtMapPoint?(callout: AGSCallout, mapPoint: AGSPoint): boolean;

	calloutWillShowForLocationDisplay?(callout: AGSCallout, locationDisplay: AGSLocationDisplay): boolean;

	didTapAccessoryButtonForCallout?(callout: AGSCallout): void;
}
declare var AGSCalloutDelegate: {

	prototype: AGSCalloutDelegate;
};

declare const enum AGSCalloutLeaderPosition {

	Bottom = 1,

	Top = 2,

	Left = 4,

	Right = 8,

	Any = 15
}

declare class AGSCamera extends AGSObject {

	static alloc(): AGSCamera; // inherited from NSObject

	static cameraWithLatitudeLongitudeAltitudeHeadingPitchRoll(latitude: number, longitude: number, altitude: number, heading: number, pitch: number, roll: number): AGSCamera;

	static cameraWithLocationHeadingPitchRoll(locationPoint: AGSPoint, heading: number, pitch: number, roll: number): AGSCamera;

	static cameraWithLookAtPointDistanceHeadingPitchRoll(lookAtPoint: AGSPoint, distance: number, heading: number, pitch: number, roll: number): AGSCamera;

	static cameraWithTransformationMatrix(transformationMatrix: AGSTransformationMatrix): AGSCamera;

	static new(): AGSCamera; // inherited from NSObject

	readonly heading: number;

	readonly location: AGSPoint;

	readonly pitch: number;

	readonly roll: number;

	readonly transformationMatrix: AGSTransformationMatrix;

	constructor(o: { latitude: number; longitude: number; altitude: number; heading: number; pitch: number; roll: number; });

	constructor(o: { location: AGSPoint; heading: number; pitch: number; roll: number; });

	constructor(o: { lookAtPoint: AGSPoint; distance: number; heading: number; pitch: number; roll: number; });

	constructor(o: { transformationMatrix: AGSTransformationMatrix; });

	elevateWithDeltaAltitude(deltaAltitude: number): AGSCamera;

	initWithLatitudeLongitudeAltitudeHeadingPitchRoll(latitude: number, longitude: number, altitude: number, heading: number, pitch: number, roll: number): this;

	initWithLocationHeadingPitchRoll(locationPoint: AGSPoint, heading: number, pitch: number, roll: number): this;

	initWithLookAtPointDistanceHeadingPitchRoll(lookAtPoint: AGSPoint, distance: number, heading: number, pitch: number, roll: number): this;

	initWithTransformationMatrix(transformationMatrix: AGSTransformationMatrix): this;

	isEqualToCamera(other: AGSCamera): boolean;

	moveForwardWithDistance(distance: number): AGSCamera;

	moveToLocation(location: AGSPoint): AGSCamera;

	moveTowardTargetPointDistance(targetPoint: AGSPoint, distance: number): AGSCamera;

	rotateAroundTargetPointDeltaHeadingDeltaPitchDeltaRoll(targetPoint: AGSPoint, deltaHeading: number, deltaPitch: number, deltaRoll: number): AGSCamera;

	rotateToHeadingPitchRoll(heading: number, pitch: number, roll: number): AGSCamera;

	zoomTowardTargetPointFactor(targetPoint: AGSPoint, factor: number): AGSCamera;
}

declare class AGSCameraController extends AGSObject {

	static alloc(): AGSCameraController; // inherited from NSObject

	static new(): AGSCameraController; // inherited from NSObject
}

interface AGSCancelable extends NSObjectProtocol {

	cancel(): void;

	isCanceled(): boolean;
}
declare var AGSCancelable: {

	prototype: AGSCancelable;
};

declare class AGSClassBreak extends AGSObject implements AGSJSONSerializable, NSCopying {

	static alloc(): AGSClassBreak; // inherited from NSObject

	static classBreak(): AGSClassBreak;

	static classBreakWithDescriptionLabelMinValueMaxValueSymbol(description: string, label: string, minValue: number, maxValue: number, symbol: AGSSymbol): AGSClassBreak;

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSClassBreak; // inherited from NSObject

	breakDescription: string;

	label: string;

	maxValue: number;

	minValue: number;

	symbol: AGSSymbol;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { description: string; label: string; minValue: number; maxValue: number; symbol: AGSSymbol; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDescriptionLabelMinValueMaxValueSymbol(description: string, label: string, minValue: number, maxValue: number, symbol: AGSSymbol): this;

	isEqual(object: any): boolean;

	isEqualToClassBreak(other: AGSClassBreak): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare class AGSClassBreaksRenderer extends AGSRenderer {

	static alloc(): AGSClassBreaksRenderer; // inherited from NSObject

	static classBreaksRenderer(): AGSClassBreaksRenderer;

	static classBreaksRendererWithFieldNameClassBreaks(fieldName: string, classBreaks: NSArray<AGSClassBreak> | AGSClassBreak[]): AGSClassBreaksRenderer;

	static new(): AGSClassBreaksRenderer; // inherited from NSObject

	backgroundFillSymbol: AGSSymbol;

	classBreaks: NSArray<AGSClassBreak>;

	readonly classificationMethod: AGSRendererClassificationMethod;

	defaultLabel: string;

	defaultSymbol: AGSSymbol;

	fieldName: string;

	minValue: number;

	normalizationField: string;

	normalizationTotal: number;

	normalizationType: AGSRendererNormalizationType;

	constructor(o: { fieldName: string; classBreaks: NSArray<AGSClassBreak> | AGSClassBreak[]; });

	initWithFieldNameClassBreaks(fieldName: string, classBreaks: NSArray<AGSClassBreak> | AGSClassBreak[]): this;
}

declare class AGSClosestFacilityParameters extends AGSObject {

	static alloc(): AGSClosestFacilityParameters; // inherited from NSObject

	static new(): AGSClosestFacilityParameters; // inherited from NSObject

	accumulateAttributeNames: NSArray<string>;

	defaultImpedanceCutoff: number;

	defaultTargetFacilityCount: number;

	directionsDistanceUnits: AGSUnitSystem;

	directionsLanguage: string;

	directionsStyle: AGSDirectionsStyle;

	outputSpatialReference: AGSSpatialReference;

	returnDirections: boolean;

	returnPointBarriers: boolean;

	returnPolygonBarriers: boolean;

	returnPolylineBarriers: boolean;

	returnRoutes: boolean;

	routeShapeType: AGSRouteShapeType;

	startTime: Date;

	startTimeUsage: AGSStartTimeUsage;

	travelDirection: AGSTravelDirection;

	travelMode: AGSTravelMode;

	clearFacilities(): void;

	clearIncidents(): void;

	clearPointBarriers(): void;

	clearPolygonBarriers(): void;

	clearPolylineBarriers(): void;

	searchWhereClauseForSourceName(sourceName: string): string;

	setFacilities(facilities: NSArray<AGSFacility> | AGSFacility[]): void;

	setFacilitiesWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setIncidents(incidents: NSArray<AGSIncident> | AGSIncident[]): void;

	setIncidentsWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setPointBarriers(pointBarriers: NSArray<AGSPointBarrier> | AGSPointBarrier[]): void;

	setPointBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setPolygonBarriers(polygonBarriers: NSArray<AGSPolygonBarrier> | AGSPolygonBarrier[]): void;

	setPolygonBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setPolylineBarriers(lineBarriers: NSArray<AGSPolylineBarrier> | AGSPolylineBarrier[]): void;

	setPolylineBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setSearchWhereClauseForSourceName(searchWhereClause: string, sourceName: string): void;
}

declare class AGSClosestFacilityResult extends AGSObject {

	static alloc(): AGSClosestFacilityResult; // inherited from NSObject

	static new(): AGSClosestFacilityResult; // inherited from NSObject

	readonly directionsLanguage: string;

	readonly facilities: NSArray<AGSFacility>;

	readonly incidents: NSArray<AGSIncident>;

	readonly messages: NSArray<string>;

	readonly pointBarriers: NSArray<AGSPointBarrier>;

	readonly polygonBarriers: NSArray<AGSPolygonBarrier>;

	readonly polylineBarriers: NSArray<AGSPolylineBarrier>;

	facilityCostsForAttributeNameFacilityIndex(attributeName: string, facilityIndex: number): NSArray<number>;

	rankedFacilityIndexesForIncidentIndex(incidentIndex: number): NSArray<number>;

	routeForFacilityIndexIncidentIndex(facilityIndex: number, incidentIndex: number): AGSClosestFacilityRoute;
}

declare class AGSClosestFacilityRoute extends AGSObject {

	static alloc(): AGSClosestFacilityRoute; // inherited from NSObject

	static new(): AGSClosestFacilityRoute; // inherited from NSObject

	readonly arrivalCurbApproach: AGSCurbApproach;

	readonly departureCurbApproach: AGSCurbApproach;

	readonly directionManeuvers: NSArray<AGSDirectionManeuver>;

	readonly endTime: Date;

	readonly endTimeShift: number;

	readonly routeGeometry: AGSPolyline;

	readonly startTime: Date;

	readonly startTimeShift: number;

	readonly totalLength: number;

	readonly totalTime: number;

	readonly travelTime: number;

	costForCostAttribute(attributeName: string): number;
}

declare class AGSClosestFacilityTask extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSClosestFacilityTask; // inherited from NSObject

	static closestFacilityTaskWithDatabaseNameNetworkName(databaseName: string, networkName: string): AGSClosestFacilityTask;

	static closestFacilityTaskWithDataset(dataset: AGSTransportationNetworkDataset): AGSClosestFacilityTask;

	static closestFacilityTaskWithFileURLToDatabaseNetworkName(fileURLToDatabase: NSURL, networkName: string): AGSClosestFacilityTask;

	static closestFacilityTaskWithURL(URL: NSURL): AGSClosestFacilityTask;

	static new(): AGSClosestFacilityTask; // inherited from NSObject

	readonly closestFacilityTaskInfo: AGSClosestFacilityTaskInfo;

	readonly transportationNetworkDataset: AGSTransportationNetworkDataset;

	constructor(o: { databaseName: string; networkName: string; });

	constructor(o: { dataset: AGSTransportationNetworkDataset; });

	constructor(o: { fileURLToDatabase: NSURL; networkName: string; });

	constructor(o: { URL: NSURL; });

	defaultClosestFacilityParametersWithCompletion(completion: (p1: AGSClosestFacilityParameters, p2: NSError) => void): AGSCancelable;

	initWithDatabaseNameNetworkName(databaseName: string, networkName: string): this;

	initWithDataset(dataset: AGSTransportationNetworkDataset): this;

	initWithFileURLToDatabaseNetworkName(fileURLToDatabase: NSURL, networkName: string): this;

	initWithURL(URL: NSURL): this;

	solveClosestFacilityWithParametersCompletion(closestFacilityParameters: AGSClosestFacilityParameters, completion: (p1: AGSClosestFacilityResult, p2: NSError) => void): AGSCancelable;
}

declare class AGSClosestFacilityTaskInfo extends AGSObject {

	static alloc(): AGSClosestFacilityTaskInfo; // inherited from NSObject

	static new(): AGSClosestFacilityTaskInfo; // inherited from NSObject

	readonly accumulateAttributeNames: NSArray<string>;

	readonly costAttributes: NSDictionary<string, AGSCostAttribute>;

	readonly defaultImpedanceCutoff: number;

	readonly defaultTargetFacilityCount: number;

	readonly defaultTravelModeName: string;

	readonly directionsDistanceUnits: AGSUnitSystem;

	readonly directionsLanguage: string;

	readonly directionsStyle: AGSDirectionsStyle;

	readonly directionsSupport: AGSNetworkDirectionsSupport;

	readonly maxLocatingDistance: number;

	readonly networkName: string;

	readonly outputSpatialReference: AGSSpatialReference;

	readonly restrictionAttributes: NSDictionary<string, AGSRestrictionAttribute>;

	readonly routeShapeType: AGSRouteShapeType;

	readonly startTime: Date;

	readonly startTimeUsage: AGSStartTimeUsage;

	readonly supportedLanguages: NSArray<string>;

	readonly supportedRestrictionUsageParameterValues: NSArray<string>;

	readonly travelDirection: AGSTravelDirection;

	readonly travelModes: NSArray<AGSTravelMode>;
}

declare class AGSCodedValue extends AGSObject {

	static alloc(): AGSCodedValue; // inherited from NSObject

	static new(): AGSCodedValue; // inherited from NSObject

	readonly code: any;

	readonly name: string;
}

declare class AGSCodedValueDomain extends AGSDomain {

	static alloc(): AGSCodedValueDomain; // inherited from NSObject

	static new(): AGSCodedValueDomain; // inherited from NSObject

	readonly codedValues: NSArray<AGSCodedValue>;
}

declare class AGSColorRamp extends AGSObject {

	static alloc(): AGSColorRamp; // inherited from NSObject

	static colorRampWithTypeSize(type: AGSPresetColorRampType, size: number): AGSColorRamp;

	static new(): AGSColorRamp; // inherited from NSObject

	constructor(o: { type: AGSPresetColorRampType; size: number; });

	initWithTypeSize(type: AGSPresetColorRampType, size: number): this;
}

declare class AGSColormap extends AGSObject {

	static alloc(): AGSColormap; // inherited from NSObject

	static colormapWithColors(colors: NSArray<UIColor> | UIColor[]): AGSColormap;

	static new(): AGSColormap; // inherited from NSObject

	constructor(o: { colors: NSArray<UIColor> | UIColor[]; });

	initWithColors(colors: NSArray<UIColor> | UIColor[]): this;
}

declare class AGSColormapRenderer extends AGSRasterRenderer {

	static alloc(): AGSColormapRenderer; // inherited from NSObject

	static colormapRendererWithColormap(colormap: AGSColormap): AGSColormapRenderer;

	static colormapRendererWithColors(colors: NSArray<UIColor> | UIColor[]): AGSColormapRenderer;

	static new(): AGSColormapRenderer; // inherited from NSObject

	static rasterRenderer(): AGSColormapRenderer; // inherited from AGSRasterRenderer

	readonly colormap: AGSColormap;

	constructor(o: { colormap: AGSColormap; });

	constructor(o: { colors: NSArray<UIColor> | UIColor[]; });

	initWithColormap(colormap: AGSColormap): this;

	initWithColors(colors: NSArray<UIColor> | UIColor[]): this;
}

declare class AGSCompositeSymbol extends AGSSymbol {

	static alloc(): AGSCompositeSymbol; // inherited from NSObject

	static compositeSymbol(): AGSCompositeSymbol;

	static compositeSymbolWithSymbols(symbols: NSArray<AGSSymbol> | AGSSymbol[]): AGSCompositeSymbol;

	static new(): AGSCompositeSymbol; // inherited from NSObject

	symbols: NSArray<AGSSymbol>;

	constructor(o: { symbols: NSArray<AGSSymbol> | AGSSymbol[]; });

	initWithSymbols(symbols: NSArray<AGSSymbol> | AGSSymbol[]): this;
}

declare class AGSCoordinateFormatter extends AGSObject {

	static GARSStringFromPoint(point: AGSPoint): string;

	static GEOREFStringFromPointPrecision(point: AGSPoint, precision: number): string;

	static LatitudeLongitudeStringFromPointFormatDecimalPlaces(point: AGSPoint, format: AGSLatitudeLongitudeFormat, decimalPlaces: number): string;

	static MGRSStringFromPointConversionModePrecisionAddSpaces(point: AGSPoint, conversionMode: AGSMGRSConversionMode, precision: number, addSpaces: boolean): string;

	static USNGStringFromPointPrecisionAddSpaces(point: AGSPoint, precision: number, addSpaces: boolean): string;

	static UTMStringFromPointConversionModeAddSpaces(point: AGSPoint, conversionMode: AGSUTMConversionMode, addSpaces: boolean): string;

	static alloc(): AGSCoordinateFormatter; // inherited from NSObject

	static new(): AGSCoordinateFormatter; // inherited from NSObject

	static pointFromGARSStringSpatialReferenceConversionMode(GARSString: string, spatialReference: AGSSpatialReference, conversionMode: AGSGARSConversionMode): AGSPoint;

	static pointFromGEOREFStringSpatialReference(GEOREFString: string, spatialReference: AGSSpatialReference): AGSPoint;

	static pointFromLatitudeLongitudeStringSpatialReference(latLongString: string, spatialReference: AGSSpatialReference): AGSPoint;

	static pointFromMGRSStringSpatialReferenceConversionMode(MGRSString: string, spatialReference: AGSSpatialReference, conversionMode: AGSMGRSConversionMode): AGSPoint;

	static pointFromUSNGStringSpatialReference(USNGString: string, spatialReference: AGSSpatialReference): AGSPoint;

	static pointFromUTMStringSpatialReferenceConversionMode(UTMString: string, spatialReference: AGSSpatialReference, conversionMode: AGSUTMConversionMode): AGSPoint;
}

declare class AGSCostAttribute extends AGSObject {

	static alloc(): AGSCostAttribute; // inherited from NSObject

	static new(): AGSCostAttribute; // inherited from NSObject

	readonly parameterValues: NSDictionary<string, any>;

	readonly unit: AGSAttributeUnit;
}

declare class AGSCredential extends NSObject implements NSCoding, NSCopying {

	static alloc(): AGSCredential; // inherited from NSObject

	static credentialWithUserPassword(username: string, password: string): AGSCredential;

	static identitiesForProtectionSpace(protectionSpace: NSURLProtectionSpace): NSArray<any>;

	static importCertificateDataPasswordOverwriteError(data: NSData, password: string, overwrite: boolean): any;

	static new(): AGSCredential; // inherited from NSObject

	static removeIdentityFromKeychain(identityRef: any): number;

	cachingEnabled: boolean;

	identity: any;

	password: string;

	readonly referer: string;

	token: string;

	tokenUrl: NSURL;

	username: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { identityRef: any; });

	constructor(o: { token: string; referer: string; });

	constructor(o: { user: string; password: string; });

	authenticatingHost(): string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithIdentityRef(identityRef: any): this;

	initWithTokenReferer(token: string, referer: string): this;

	initWithUserPassword(username: string, password: string): this;
}

declare class AGSCredentialCache extends NSObject implements NSCoding {

	static alloc(): AGSCredentialCache; // inherited from NSObject

	static new(): AGSCredentialCache; // inherited from NSObject

	static removeFromKeychainWithIdentifierCompletion(identifier: string, completion: (p1: NSError) => void): void;

	readonly autoSyncToKeychain: boolean;

	readonly keychainItem: AGSKeychainItem;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	disableAutoSyncToKeychain(): void;

	enableAutoSyncToKeychainWithIdentifierAccessGroupAcrossDevices(identifier: string, accessGroup: string, acrossDevices: boolean): void;

	enableAutoSyncToKeychainWithIdentifierAccessGroupAcrossDevicesAccessible(identifier: string, accessGroup: string, acrossDevices: boolean, accessible: AGSKeychainItemAccessible): void;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	removeAllCredentials(): void;

	removeAndRevokeAllCredentialsWithCompletion(completion: (p1: NSDictionary<AGSCredential, NSError>) => void): void;

	removeAndRevokeCredentialCompletion(credential: AGSCredential, completion: (p1: NSError) => void): void;
}

declare const enum AGSCredentialErrorType {

	None = 0,

	InvalidCredentials = 1,

	SSLRequired = 2,

	Unknown = 3
}

declare const enum AGSCurbApproach {

	EitherSide = 0,

	LeftSide = 1,

	RightSide = 2,

	NoUTurn = 3,

	Unknown = 4
}

declare class AGSDashGeometricEffect extends AGSGeometricEffect {

	static alloc(): AGSDashGeometricEffect; // inherited from NSObject

	static dashGeometricEffect(): AGSDashGeometricEffect;

	static dashGeometricEffectWithDashTemplate(dashTemplate: NSArray<number> | number[]): AGSDashGeometricEffect;

	static new(): AGSDashGeometricEffect; // inherited from NSObject

	dashTemplate: NSArray<number>;

	constructor(o: { dashTemplate: NSArray<number> | number[]; });

	initWithDashTemplate(dashTemplate: NSArray<number> | number[]): this;
}

declare class AGSDatumTransformation extends AGSObject {

	static alloc(): AGSDatumTransformation; // inherited from NSObject

	static new(): AGSDatumTransformation; // inherited from NSObject

	readonly inputSpatialReference: AGSSpatialReference;

	readonly missingProjectionEngineFiles: boolean;

	readonly name: string;

	readonly outputSpatialReference: AGSSpatialReference;

	inverse(): AGSDatumTransformation;

	isEqualToDatumTransformation(other: AGSDatumTransformation): boolean;
}

declare const enum AGSDestinationStatus {

	NotReached = 0,

	Approaching = 1,

	Reached = 2
}

declare const enum AGSDestinationTableRowFilter {

	All = 0,

	RelatedOnly = 1
}

declare class AGSDictionaryRenderer extends AGSRenderer {

	static alloc(): AGSDictionaryRenderer; // inherited from NSObject

	static dictionaryRendererWithDictionarySymbolStyle(dictionarySymbolStyle: AGSDictionarySymbolStyle): AGSDictionaryRenderer;

	static dictionaryRendererWithDictionarySymbolStyleSymbologyFieldOverridesTextFieldOverrides(dictionarySymbolStyle: AGSDictionarySymbolStyle, symbologyFieldOverrides: NSDictionary<string, any>, textFieldOverrides: NSDictionary<string, string>): AGSDictionaryRenderer;

	static new(): AGSDictionaryRenderer; // inherited from NSObject

	dictionarySymbolStyle: AGSDictionarySymbolStyle;

	symbologyFieldOverrides: NSDictionary<string, string>;

	textFieldOverrides: NSDictionary<string, string>;

	textVisibilityMaxScale: number;

	textVisibilityMinScale: number;

	textVisible: boolean;

	constructor(o: { dictionarySymbolStyle: AGSDictionarySymbolStyle; });

	constructor(o: { dictionarySymbolStyle: AGSDictionarySymbolStyle; symbologyFieldOverrides: NSDictionary<string, any>; textFieldOverrides: NSDictionary<string, string>; });

	initWithDictionarySymbolStyle(dictionarySymbolStyle: AGSDictionarySymbolStyle): this;

	initWithDictionarySymbolStyleSymbologyFieldOverridesTextFieldOverrides(dictionarySymbolStyle: AGSDictionarySymbolStyle, symbologyFieldOverrides: NSDictionary<string, any>, textFieldOverrides: NSDictionary<string, string>): this;
}

declare class AGSDictionarySymbolStyle extends AGSSymbolStyle {

	static alloc(): AGSDictionarySymbolStyle; // inherited from NSObject

	static dictionarySymbolStyleWithFileURL(fileURL: NSURL): AGSDictionarySymbolStyle;

	static dictionarySymbolStyleWithName(name: string): AGSDictionarySymbolStyle;

	static dictionarySymbolStyleWithSpecificationType(specificationType: string): AGSDictionarySymbolStyle;

	static dictionarySymbolStyleWithSpecificationTypeStyleURL(specificationType: string, styleURL: NSURL): AGSDictionarySymbolStyle;

	static new(): AGSDictionarySymbolStyle; // inherited from NSObject

	static symbolStyleWithName(name: string): AGSDictionarySymbolStyle; // inherited from AGSSymbolStyle

	static symbolStyleWithURL(fileURL: NSURL): AGSDictionarySymbolStyle; // inherited from AGSSymbolStyle

	configurationProperties: NSDictionary<string, string>;

	readonly configurations: NSArray<AGSDictionarySymbolStyleConfiguration>;

	readonly dictionaryName: string;

	readonly specificationType: string;

	readonly symbologyFieldNames: NSArray<string>;

	readonly textFieldNames: NSArray<string>;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { specificationType: string; });

	constructor(o: { specificationType: string; styleURL: NSURL; });

	initWithFileURL(fileURL: NSURL): this;

	initWithSpecificationType(specificationType: string): this;

	initWithSpecificationTypeStyleURL(specificationType: string, styleURL: NSURL): this;

	symbolWithAttributesCompletion(attributes: NSDictionary<string, any>, completion: (p1: AGSSymbol, p2: NSError) => void): AGSCancelable;
}

declare class AGSDictionarySymbolStyleConfiguration extends AGSObject {

	static alloc(): AGSDictionarySymbolStyleConfiguration; // inherited from NSObject

	static new(): AGSDictionarySymbolStyleConfiguration; // inherited from NSObject

	readonly domain: NSArray<any>;

	readonly info: string;

	readonly name: string;

	value: any;
}

declare class AGSDirectionEvent extends AGSObject {

	static alloc(): AGSDirectionEvent; // inherited from NSObject

	static new(): AGSDirectionEvent; // inherited from NSObject

	readonly estimatedArrivalTime: Date;

	readonly estimatedArrivalTimeShift: number;

	readonly eventMessages: NSArray<string>;

	readonly eventText: string;

	readonly geometry: AGSPoint;
}

declare class AGSDirectionManeuver extends AGSObject {

	static alloc(): AGSDirectionManeuver; // inherited from NSObject

	static new(): AGSDirectionManeuver; // inherited from NSObject

	readonly directionEvents: NSArray<AGSDirectionEvent>;

	readonly directionText: string;

	readonly duration: number;

	readonly estimatedArrivalTimeShift: number;

	readonly estimatedArriveTime: Date;

	readonly fromLevel: number;

	readonly geometry: AGSGeometry;

	readonly length: number;

	readonly maneuverMessages: NSArray<AGSDirectionMessage>;

	readonly maneuverType: AGSDirectionManeuverType;

	readonly toLevel: number;
}

declare const enum AGSDirectionManeuverType {

	Unknown = 0,

	Stop = 1,

	Straight = 2,

	BearLeft = 3,

	BearRight = 4,

	TurnLeft = 5,

	TurnRight = 6,

	SharpLeft = 7,

	SharpRight = 8,

	UTurn = 9,

	Ferry = 10,

	Roundabout = 11,

	HighwayMerge = 12,

	HighwayExit = 13,

	HighwayChange = 14,

	ForkCenter = 15,

	ForkLeft = 16,

	ForkRight = 17,

	Depart = 18,

	TripItem = 19,

	EndOfFerry = 20,

	RampRight = 21,

	RampLeft = 22,

	TurnLeftRight = 23,

	TurnRightLeft = 24,

	TurnRightRight = 25,

	TurnLeftLeft = 26,

	PedestrianRamp = 27,

	Elevator = 28,

	Escalator = 29,

	Stairs = 30,

	DoorPassage = 31
}

declare class AGSDirectionMessage extends AGSObject {

	static alloc(): AGSDirectionMessage; // inherited from NSObject

	static new(): AGSDirectionMessage; // inherited from NSObject

	readonly text: string;

	readonly type: AGSDirectionMessageType;
}

declare const enum AGSDirectionMessageType {

	Length = 0,

	Time = 1,

	Summary = 2,

	TimeWindow = 3,

	ViolationTime = 4,

	WaitTime = 5,

	ServiceTime = 6,

	EstimatedArrivalTime = 7,

	CumulativeLength = 8,

	StreetName = 9,

	AlternativeName = 10,

	Branch = 11,

	Toward = 12,

	CrossStreet = 13,

	Exit = 14
}

declare const enum AGSDirectionsStyle {

	Desktop = 0,

	Navigation = 1,

	Campus = 2
}

declare class AGSDistance extends AGSObject {

	static alloc(): AGSDistance; // inherited from NSObject

	static new(): AGSDistance; // inherited from NSObject

	readonly unit: AGSLinearUnit;

	readonly value: number;
}

declare class AGSDistanceCompositeSceneSymbol extends AGSSymbol {

	static alloc(): AGSDistanceCompositeSceneSymbol; // inherited from NSObject

	static distanceCompositeSceneSymbol(): AGSDistanceCompositeSceneSymbol;

	static new(): AGSDistanceCompositeSceneSymbol; // inherited from NSObject

	ranges: NSArray<AGSDistanceSymbolRange>;
}

declare class AGSDistanceSymbolRange extends AGSObject {

	static alloc(): AGSDistanceSymbolRange; // inherited from NSObject

	static distanceSymbolRangeWithSymbol(symbol: AGSSymbol): AGSDistanceSymbolRange;

	static distanceSymbolRangeWithSymbolMinDistanceMaxDistance(symbol: AGSSymbol, minDistance: number, maxDistance: number): AGSDistanceSymbolRange;

	static new(): AGSDistanceSymbolRange; // inherited from NSObject

	maxDistance: number;

	minDistance: number;

	symbol: AGSSymbol;

	constructor(o: { symbol: AGSSymbol; });

	constructor(o: { symbol: AGSSymbol; minDistance: number; maxDistance: number; });

	initWithSymbol(symbol: AGSSymbol): this;

	initWithSymbolMinDistanceMaxDistance(symbol: AGSSymbol, minDistance: number, maxDistance: number): this;
}

declare class AGSDomain extends AGSObject {

	static alloc(): AGSDomain; // inherited from NSObject

	static new(): AGSDomain; // inherited from NSObject

	readonly name: string;

	isEqualToDomain(other: AGSDomain): boolean;
}

declare class AGSDownloadPreplannedOfflineMapJob extends AGSJob {

	static alloc(): AGSDownloadPreplannedOfflineMapJob; // inherited from NSObject

	static new(): AGSDownloadPreplannedOfflineMapJob; // inherited from NSObject

	readonly downloadDirectory: NSURL;

	readonly excludeBasemap: boolean;

	readonly onlineMap: AGSMap;

	readonly parameters: AGSDownloadPreplannedOfflineMapParameters;

	readonly preplannedMapArea: AGSPreplannedMapArea;

	readonly result: AGSDownloadPreplannedOfflineMapResult;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: AGSDownloadPreplannedOfflineMapResult, p2: NSError) => void): void;
}

declare class AGSDownloadPreplannedOfflineMapParameters extends AGSObject {

	static alloc(): AGSDownloadPreplannedOfflineMapParameters; // inherited from NSObject

	static new(): AGSDownloadPreplannedOfflineMapParameters; // inherited from NSObject

	static preplannedOfflineMapParameters(): AGSDownloadPreplannedOfflineMapParameters;

	static preplannedOfflineMapParametersWithPreplannedOfflineMapArea(preplannedMapArea: AGSPreplannedMapArea): AGSDownloadPreplannedOfflineMapParameters;

	continueOnErrors: boolean;

	includeBasemap: boolean;

	preplannedMapArea: AGSPreplannedMapArea;

	referenceBasemapDirectory: NSURL;

	referenceBasemapFilename: string;

	updateMode: AGSPreplannedUpdateMode;

	constructor(o: { preplannedMapArea: AGSPreplannedMapArea; });

	initWithPreplannedMapArea(preplannedMapArea: AGSPreplannedMapArea): this;
}

declare class AGSDownloadPreplannedOfflineMapResult extends AGSObject {

	static alloc(): AGSDownloadPreplannedOfflineMapResult; // inherited from NSObject

	static new(): AGSDownloadPreplannedOfflineMapResult; // inherited from NSObject

	readonly hasErrors: boolean;

	readonly layerErrors: NSDictionary<AGSLayer, any>;

	readonly mobileMapPackage: AGSMobileMapPackage;

	readonly offlineMap: AGSMap;

	readonly tableErrors: NSDictionary<AGSFeatureTable, any>;
}

declare const enum AGSDrawStatus {

	InProgress = 0,

	Completed = 1
}

declare class AGSDrawingInfo extends AGSObject {

	static alloc(): AGSDrawingInfo; // inherited from NSObject

	static new(): AGSDrawingInfo; // inherited from NSObject

	readonly labelingInfo: NSArray<AGSLabelingInfo>;

	readonly renderer: AGSRenderer;

	readonly scaleSymbols: boolean;

	readonly showLabels: boolean;

	readonly transparency: number;
}

declare const enum AGSDrawingTool {

	Unknown = -1,

	AutoCompletePolygon = 0,

	Circle = 1,

	DownArrow = 2,

	Ellipse = 3,

	FreeHand = 4,

	LeftArrow = 5,

	Line = 6,

	None = 7,

	Point = 8,

	Polygon = 9,

	Rectangle = 10,

	RightArrow = 11,

	Text = 12,

	Triangle = 13,

	UpArrow = 14
}

declare const enum AGSENCAreaSymbolizationType {

	Plain = 4,

	Symbolized = 5
}

declare class AGSENCCell extends AGSLoadableBase {

	static ENCCellWithDataset(dataset: AGSENCDataset): AGSENCCell;

	static ENCCellWithFileURL(fileURL: NSURL): AGSENCCell;

	static alloc(): AGSENCCell; // inherited from NSObject

	static new(): AGSENCCell; // inherited from NSObject

	readonly dataset: AGSENCDataset;

	readonly fileURL: NSURL;

	constructor(o: { dataset: AGSENCDataset; });

	constructor(o: { fileURL: NSURL; });

	initWithDataset(dataset: AGSENCDataset): this;

	initWithFileURL(fileURL: NSURL): this;
}

declare const enum AGSENCColorScheme {

	Day = 1,

	Dusk = 2,

	Night = 3
}

declare class AGSENCDataset extends AGSObject {

	static alloc(): AGSENCDataset; // inherited from NSObject

	static new(): AGSENCDataset; // inherited from NSObject

	readonly authorized: boolean;

	readonly datasetDescription: string;

	readonly extent: AGSEnvelope;

	readonly name: string;

	readonly volumeName: string;
}

declare class AGSENCDisplayCategories extends AGSObject {

	static alloc(): AGSENCDisplayCategories; // inherited from NSObject

	static new(): AGSENCDisplayCategories; // inherited from NSObject

	displayBase: boolean;

	otherDisplay: boolean;

	standardDisplay: boolean;
}

declare const enum AGSENCDisplayDepthUnits {

	Meters = 1,

	Feet = 2,

	Fathoms = 3
}

declare class AGSENCDisplaySettings extends AGSObject {

	static alloc(): AGSENCDisplaySettings; // inherited from NSObject

	static new(): AGSENCDisplaySettings; // inherited from NSObject

	readonly marinerSettings: AGSENCMarinerSettings;

	readonly textGroupVisibilitySettings: AGSENCTextGroupVisibilitySettings;

	readonly viewingGroupSettings: AGSENCViewingGroupSettings;
}

declare class AGSENCEnvironmentSettings extends AGSObject {

	static alloc(): AGSENCEnvironmentSettings; // inherited from NSObject

	static new(): AGSENCEnvironmentSettings; // inherited from NSObject

	static sharedSettings(): AGSENCEnvironmentSettings;

	SENCDataDirectory: NSURL;

	readonly displaySettings: AGSENCDisplaySettings;

	resourceDirectory: NSURL;
}

declare class AGSENCExchangeSet extends AGSLoadableBase {

	static ENCExchangeSetWithFileURLs(fileURLs: NSArray<NSURL> | NSURL[]): AGSENCExchangeSet;

	static alloc(): AGSENCExchangeSet; // inherited from NSObject

	static new(): AGSENCExchangeSet; // inherited from NSObject

	readonly datasets: NSArray<AGSENCDataset>;

	readonly fileURLs: NSArray<NSURL>;

	readonly readmeFileURL: NSURL;

	constructor(o: { fileURLs: NSArray<NSURL> | NSURL[]; });

	initWithFileURLs(fileURLs: NSArray<NSURL> | NSURL[]): this;
}

declare class AGSENCFeature extends AGSObject implements AGSGeoElement {

	static alloc(): AGSENCFeature; // inherited from NSObject

	static new(): AGSENCFeature; // inherited from NSObject

	readonly acronym: string;

	readonly featureDescription: string;

	readonly attributes: NSMutableDictionary<string, any>; // inherited from AGSGeoElement

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	geometry: AGSGeometry; // inherited from AGSGeoElement

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	attributeDescriptionForAcronym(acronym: string): string;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSENCLayer extends AGSLayer {

	static ENCLayerWithCell(cell: AGSENCCell): AGSENCLayer;

	static alloc(): AGSENCLayer; // inherited from NSObject

	static new(): AGSENCLayer; // inherited from NSObject

	readonly cell: AGSENCCell;

	constructor(o: { cell: AGSENCCell; });

	clearSelection(): void;

	initWithCell(cell: AGSENCCell): this;

	selectFeature(feature: AGSENCFeature): void;
}

declare class AGSENCMarinerSettings extends AGSObject {

	static alloc(): AGSENCMarinerSettings; // inherited from NSObject

	static new(): AGSENCMarinerSettings; // inherited from NSObject

	areaSymbolizationType: AGSENCAreaSymbolizationType;

	colorScheme: AGSENCColorScheme;

	dataQuality: boolean;

	deepContour: number;

	readonly displayCategories: AGSENCDisplayCategories;

	displayDepthUnits: AGSENCDisplayDepthUnits;

	displayNOBJNM: boolean;

	honorSCAMIN: boolean;

	isolatedDangers: boolean;

	labelContours: boolean;

	labelSafetyContours: boolean;

	lowAccuracy: boolean;

	pointSymbolizationType: AGSENCPointSymbolizationType;

	safetyContour: number;

	shallowContour: number;

	shallowDepthPattern: boolean;

	twoDepthShades: boolean;

	resetToDefaults(): void;
}

declare const enum AGSENCPointSymbolizationType {

	Simplified = 2,

	PaperChart = 1
}

declare class AGSENCTextGroupVisibilitySettings extends AGSObject {

	static alloc(): AGSENCTextGroupVisibilitySettings; // inherited from NSObject

	static new(): AGSENCTextGroupVisibilitySettings; // inherited from NSObject

	berthNumber: boolean;

	currentVelocity: boolean;

	geographicNames: boolean;

	heightOfIsletOfLandFeature: boolean;

	importantText: boolean;

	lightDescription: boolean;

	magneticVariationAndSweptDepth: boolean;

	namesForPositionReporting: boolean;

	natureOfSeabed: boolean;

	noteOnChartData: boolean;

	resetToDefaults(): void;
}

declare class AGSENCViewingGroupSettings extends AGSObject {

	static alloc(): AGSENCViewingGroupSettings; // inherited from NSObject

	static new(): AGSENCViewingGroupSettings; // inherited from NSObject

	allIsolatedDangers: boolean;

	archipelagicSeaLanes: boolean;

	boundariesAndLimits: boolean;

	buoysBeaconsAidsToNavigation: boolean;

	buoysBeaconsStructures: boolean;

	chartScaleBoundaries: boolean;

	depthContours: boolean;

	dryingLine: boolean;

	lights: boolean;

	magneticVariation: boolean;

	otherMiscellaneous: boolean;

	prohibitedAndRestrictedAreas: boolean;

	seabed: boolean;

	shipsRoutingSystemsAndFerryRoutes: boolean;

	spotSoundings: boolean;

	standardMiscellaneous: boolean;

	submarineCablesAndPipelines: boolean;

	tidal: boolean;

	resetToDefaults(): void;
}

declare var AGSEdgeInsetsZero: UIEdgeInsets;

declare class AGSEditFieldsInfo extends AGSObject {

	static alloc(): AGSEditFieldsInfo; // inherited from NSObject

	static new(): AGSEditFieldsInfo; // inherited from NSObject

	readonly creationDateField: string;

	readonly creatorField: string;

	readonly editDateField: string;

	readonly editorField: string;

	readonly realm: string;
}

declare const enum AGSEditOperation {

	Add = 0,

	Update = 1,

	Delete = 2,

	Unknown = -1
}

declare class AGSEditResult extends AGSObject {

	static alloc(): AGSEditResult; // inherited from NSObject

	static new(): AGSEditResult; // inherited from NSObject

	readonly completedWithErrors: boolean;

	readonly editOperation: AGSEditOperation;

	readonly error: NSError;

	readonly globalID: string;

	readonly objectID: number;
}

declare class AGSEditorTrackingInfo extends AGSObject {

	static alloc(): AGSEditorTrackingInfo; // inherited from NSObject

	static new(): AGSEditorTrackingInfo; // inherited from NSObject

	readonly allowAnonymousToDelete: boolean;

	readonly allowAnonymousToUpdate: boolean;

	readonly allowOthersToDelete: boolean;

	readonly allowOthersToUpdate: boolean;

	readonly editorTrackingEnabled: boolean;

	readonly ownershipBasedAccessControlEnabled: boolean;
}

declare class AGSElevationServiceInfo extends NSObject {

	static alloc(): AGSElevationServiceInfo; // inherited from NSObject

	static new(): AGSElevationServiceInfo; // inherited from NSObject

	readonly URL: NSURL;

	readonly layerType: string;

	readonly serviceID: string;
}

declare var AGSElevationServiceLayerTypeArcGISTiled: string;

declare class AGSElevationSource extends AGSLoadableBase {

	static alloc(): AGSElevationSource; // inherited from NSObject

	static new(): AGSElevationSource; // inherited from NSObject

	enabled: boolean;

	name: string;
}

declare class AGSEnumerator extends NSEnumerator<NSObject> {

	static alloc(): AGSEnumerator; // inherited from NSObject

	static new(): AGSEnumerator; // inherited from NSObject

	nextObject(): any;
}

declare class AGSEnvelope extends AGSGeometry {

	static alloc(): AGSEnvelope; // inherited from NSObject

	static envelopeWithCenterWidthHeight(center: AGSPoint, width: number, height: number): AGSEnvelope;

	static envelopeWithCenterWidthHeightDepth(center: AGSPoint, width: number, height: number, depth: number): AGSEnvelope;

	static envelopeWithMinMax(min: AGSPoint, max: AGSPoint): AGSEnvelope;

	static envelopeWithXMinYMinMMinXMaxYMaxMMaxSpatialReference(xMin: number, yMin: number, mMin: number, xMax: number, yMax: number, mMax: number, spatialReference: AGSSpatialReference): AGSEnvelope;

	static envelopeWithXMinYMinXMaxYMaxSpatialReference(xMin: number, yMin: number, xMax: number, yMax: number, spatialReference: AGSSpatialReference): AGSEnvelope;

	static envelopeWithXMinYMinZMinMMinXMaxYMaxZMaxMMaxSpatialReference(xMin: number, yMin: number, zMin: number, mMin: number, xMax: number, yMax: number, zMax: number, mMax: number, spatialReference: AGSSpatialReference): AGSEnvelope;

	static envelopeWithXMinYMinZMinXMaxYMaxZMaxSpatialReference(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, spatialReference: AGSSpatialReference): AGSEnvelope;

	static new(): AGSEnvelope; // inherited from NSObject

	readonly center: AGSPoint;

	readonly depth: number;

	readonly height: number;

	readonly mMax: number;

	readonly mMin: number;

	readonly width: number;

	readonly xMax: number;

	readonly xMin: number;

	readonly yMax: number;

	readonly yMin: number;

	readonly zMax: number;

	readonly zMin: number;

	constructor(o: { center: AGSPoint; width: number; height: number; });

	constructor(o: { center: AGSPoint; width: number; height: number; depth: number; });

	constructor(o: { min: AGSPoint; max: AGSPoint; });

	constructor(o: { XMin: number; yMin: number; mMin: number; xMax: number; yMax: number; mMax: number; spatialReference: AGSSpatialReference; });

	constructor(o: { XMin: number; yMin: number; xMax: number; yMax: number; spatialReference: AGSSpatialReference; });

	constructor(o: { XMin: number; yMin: number; zMin: number; mMin: number; xMax: number; yMax: number; zMax: number; mMax: number; spatialReference: AGSSpatialReference; });

	constructor(o: { XMin: number; yMin: number; zMin: number; xMax: number; yMax: number; zMax: number; spatialReference: AGSSpatialReference; });

	initWithCenterWidthHeight(center: AGSPoint, width: number, height: number): this;

	initWithCenterWidthHeightDepth(center: AGSPoint, width: number, height: number, depth: number): this;

	initWithMinMax(min: AGSPoint, max: AGSPoint): this;

	initWithXMinYMinMMinXMaxYMaxMMaxSpatialReference(xMin: number, yMin: number, mMin: number, xMax: number, yMax: number, mMax: number, spatialReference: AGSSpatialReference): this;

	initWithXMinYMinXMaxYMaxSpatialReference(xMin: number, yMin: number, xMax: number, yMax: number, spatialReference: AGSSpatialReference): this;

	initWithXMinYMinZMinMMinXMaxYMaxZMaxMMaxSpatialReference(xMin: number, yMin: number, zMin: number, mMin: number, xMax: number, yMax: number, zMax: number, mMax: number, spatialReference: AGSSpatialReference): this;

	initWithXMinYMinZMinXMaxYMaxZMaxSpatialReference(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, spatialReference: AGSSpatialReference): this;

	isEqualToGeometry(other: AGSEnvelope): boolean;

	toBuilder(): AGSEnvelopeBuilder;
}

declare class AGSEnvelopeBuilder extends AGSGeometryBuilder {

	static alloc(): AGSEnvelopeBuilder; // inherited from NSObject

	static envelopeBuilderWithCenterWidthHeight(center: AGSPoint, width: number, height: number): AGSEnvelopeBuilder;

	static envelopeBuilderWithCenterWidthHeightDepth(center: AGSPoint, width: number, height: number, depth: number): AGSEnvelopeBuilder;

	static envelopeBuilderWithEnvelope(envelope: AGSEnvelope): AGSEnvelopeBuilder;

	static envelopeBuilderWithSpatialReference(sr: AGSSpatialReference): AGSEnvelopeBuilder;

	static new(): AGSEnvelopeBuilder; // inherited from NSObject

	readonly center: AGSPoint;

	readonly depth: number;

	readonly height: number;

	mMax: number;

	mMin: number;

	readonly width: number;

	xMax: number;

	xMin: number;

	yMax: number;

	yMin: number;

	zMax: number;

	zMin: number;

	constructor(o: { center: AGSPoint; width: number; height: number; });

	constructor(o: { center: AGSPoint; width: number; height: number; depth: number; });

	constructor(o: { envelope: AGSEnvelope; });

	constructor(o: { spatialReference: AGSSpatialReference; });

	centerAtPoint(point: AGSPoint): this;

	changeAspectRatio(size: CGSize): this;

	expandByFactor(factor: number): this;

	expandByFactorWithAnchorPoint(factor: number, anchorPoint: AGSPoint): this;

	initWithCenterWidthHeight(center: AGSPoint, width: number, height: number): this;

	initWithCenterWidthHeightDepth(center: AGSPoint, width: number, height: number, depth: number): this;

	initWithEnvelope(envelope: AGSEnvelope): this;

	initWithSpatialReference(sr: AGSSpatialReference): this;

	offsetByXY(offsetX: number, offsetY: number): this;

	replaceGeometry(geometry: AGSEnvelope): this;

	setMMinMMax(mMin: number, mMax: number): this;

	setXMinYMinXMaxYMax(xMin: number, yMin: number, xMax: number, yMax: number): this;

	setZMinZMax(zMin: number, zMax: number): this;

	toGeometry(): AGSEnvelope;

	unionWithEnvelope(envelope: AGSEnvelope): this;

	unionWithPoint(point: AGSPoint): this;

	unionWithXY(x: number, y: number): this;
}

declare const enum AGSErrorCode {

	Unknown = -1,

	CommonNullPtr = 1,

	CommonInvalidArgument = 2,

	CommonNotImplemented = 3,

	CommonOutOfRange = 4,

	CommonInvalidAccess = 5,

	CommonIllegalState = 6,

	CommonNotFound = 7,

	CommonExists = 8,

	CommonTimeout = 9,

	CommonRegularExpression = 10,

	CommonPropertyNotSupported = 11,

	CommonNoPermission = 12,

	CommonFile = 13,

	CommonFileNotFound = 14,

	CommonInvalidCall = 15,

	CommonIO = 16,

	CommonUserCanceled = 17,

	CommonInternalError = 18,

	CommonConversionFailed = 19,

	CommonNoData = 20,

	CommonInvalidJSON = 21,

	CommonUserDefinedFailure = 22,

	CommonBadXml = 23,

	CommonObjectAlreadyOwned = 24,

	CommonExpired = 26,

	SqliteError = 1001,

	SqliteInternal = 1002,

	SqlitePerm = 1003,

	SqliteAbort = 1004,

	SqliteBusy = 1005,

	SqliteLocked = 1006,

	SqliteNoMem = 1007,

	SqliteReadonly = 1008,

	SqliteInterrupt = 1009,

	SqliteIOErr = 1010,

	SqliteCorrupt = 1011,

	SqliteNotFound = 1012,

	SqliteFull = 1013,

	SqliteCantOpen = 1014,

	SqliteProtocol = 1015,

	SqliteEmpty = 1016,

	SqliteSchema = 1017,

	SqliteTooBig = 1018,

	SqliteConstraint = 1019,

	SqliteMismatch = 1020,

	SqliteMisuse = 1021,

	SqliteNolfs = 1022,

	SqliteAuth = 1023,

	SqliteFormat = 1024,

	SqliteRange = 1025,

	SqliteNotadb = 1026,

	SqliteNotice = 1027,

	SqliteWarning = 1028,

	SqliteRow = 1029,

	SqliteDone = 1030,

	GeometryUnknownError = 2000,

	GeometryCorruptedGeometry = 2001,

	GeometryEmptyGeometry = 2002,

	GeometryMathSingularity = 2003,

	GeometryBufferIsTooSmall = 2004,

	GeometryInvalidShapeType = 2005,

	GeometryProjectionOutOfSupportedRange = 2006,

	GeometryNonSimpleGeometry = 2007,

	GeometryCannotCalculateGeodesic = 2008,

	GeometryNotationConversion = 2009,

	GeometryMissingGridFile = 2010,

	GDBValueOutOfRange = 3001,

	GDBDataTypeMismatch = 3002,

	GDBBadXml = 3003,

	GDBDatabaseAlreadyExists = 3004,

	GDBDatabaseDoesNotExist = 3005,

	GDBNameLongerThan128Characters = 3006,

	GDBInvalidShapeType = 3007,

	GDBRasterNotSupported = 3008,

	GDBRelationshipClassOneToOne = 3009,

	GDBItemNotFound = 3010,

	GDBDuplicateCode = 3011,

	GDBMissingCode = 3012,

	GDBWrongItemType = 3013,

	GDBIDFieldNotNullable = 3014,

	GDBDefaultValueNotSupported = 3015,

	GDBTableNotEditable = 3016,

	GDBFieldNotFound = 3017,

	GDBFieldExists = 3018,

	GDBCannotAlterFieldType = 3019,

	GDBCannotAlterFieldWidth = 3020,

	GDBCannotAlterFieldToNullable = 3021,

	GDBCannotAlterFieldToEditable = 3022,

	GDBCannotAlterFieldToDeletable = 3023,

	GDBCannotAlterGeometryProperties = 3024,

	GDBUnnamedTable = 3025,

	GDBInvalidTypeForDomain = 3026,

	GDBMinMaxReversed = 3027,

	GDBFieldNotSupportedOnRelationshipClass = 3028,

	GDBRelationshipClassKey = 3029,

	GDBValueIsNull = 3030,

	GDBMultipleSqlStatements = 3031,

	GDBNoSqlStatements = 3032,

	GDBGeometryFieldMissing = 3033,

	GDBTransactionStarted = 3034,

	GDBTransactionNotStarted = 3035,

	GDBShapeRequiresZ = 3036,

	GDBShapeRequiresM = 3037,

	GDBShapeNoZ = 3038,

	GDBShapeNoM = 3039,

	GDBShapeWrongType = 3040,

	GDBCannotUpdateFieldType = 3041,

	GDBNoRowsAffected = 3042,

	GDBSubtypeInvalid = 3043,

	GDBSubtypeMustBeInteger = 3044,

	GDBSubtypesNotEnabled = 3045,

	GDBSubtypeExists = 3046,

	GDBDuplicateFieldNotAllowed = 3047,

	GDBCannotDeleteField = 3048,

	GDBIndexExists = 3049,

	GDBIndexNotFound = 3050,

	GDBCursorNotOnRow = 3051,

	GDBInternalError = 3052,

	GDBCannotWriteGeodatabaseManagedFields = 3053,

	GDBItemAlreadyExists = 3054,

	GDBInvalidSpatialIndexName = 3055,

	GDBRequiresSpatialIndex = 3056,

	GDBReservedName = 3057,

	GDBCannotUpdateSchemaIfChangeTracking = 3058,

	GDBInvalidDate = 3059,

	GDBDatabaseDoesNotHaveChanges = 3060,

	GDBReplicaDoesNotExist = 3061,

	GDBStorageTypeNotSupported = 3062,

	GDBReplicaModelError = 3063,

	GDBReplicaClientGenError = 3064,

	GDBReplicaNoUploadToAcknowledge = 3065,

	GDBLastWriteTimeInTheFuture = 3066,

	GDBInvalidArgument = 3067,

	GDBTransportationNetworkCorrupt = 3068,

	GDBTransportationNetworkFileIO = 3069,

	GDBFeatureHasPendingEdits = 3070,

	GDBChangeTrackingNotEnabled = 3071,

	GDBTransportationNetworkFileOpen = 3072,

	GDBTransportationNetworkUnsupported = 3073,

	GDBCannotSyncCopy = 3074,

	GDBAccessControlDenied = 3075,

	GDBGeometryOutsideReplicaExtent = 3076,

	GDBUploadAlreadyInProgress = 3077,

	GDBDatabaseClosed = 3078,

	GDBDomainAlreadyExists = 3079,

	GDBGeometryTypeNotSupported = 3080,

	GeocodeUnsupportedFileFormat = 4001,

	GeocodeUnsupportedSpatialReference = 4002,

	GeocodeUnsupportedProjectionTransformation = 4003,

	GeocodeGeocoderCreation = 4004,

	GeocodeIntersectionsNotSupported = 4005,

	GeocodeUninitializedGeocodeTask = 4006,

	GeocodeInvalidLocatorProperties = 4007,

	GeocodeRequiredFieldMissing = 4008,

	GeocodeCannotReadAddress = 4009,

	GeocodeReverseGeocodingNotSupported = 4010,

	NAInvalidRouteSettings = 5001,

	NANoSolution = 5002,

	NATaskCanceled = 5003,

	NAInvalidNetwork = 5004,

	NADirectionsError = 5005,

	NAInsufficientNumberOfStops = 5006,

	NAStopUnlocated = 5007,

	NAStopLocatedOnNonTraversableElement = 5008,

	NAPointBarrierInvalidAddedCostAttributeName = 5009,

	NALineBarrierInvalidScaledCostAttributeName = 5010,

	NAPolygonBarrierInvalidScaledCostAttributeName = 5011,

	NAPolygonBarrierInvalidScaledCostAttributeValue = 5012,

	NAPolylineBarrierInvalidScaledCostAttributeValue = 5013,

	NAInvalidImpedanceAttribute = 5014,

	NAInvalidRestrictionAttribute = 5015,

	NAInvalidAccumulateAttribute = 5016,

	NAInvalidDirectionsTimeAttribute = 5017,

	NAInvalidDirectionsDistanceAttribute = 5018,

	NAInvalidAttributeParametersAttributeName = 5019,

	NAInvalidAttributeParametersParameterName = 5020,

	NAInvalidAttributeParametersValueType = 5021,

	NAInvalidAttributeParametersRestrictionUsageValue = 5022,

	NANetworkHasNoHierarchyAttribute = 5023,

	NANoPathFoundBetweenStops = 5024,

	NAUndefinedInputSpatialReference = 5025,

	NAUndefinedOutputSpatialReference = 5026,

	NAInvalidDirectionsStyle = 5027,

	NAInvalidDirectionsLanguage = 5028,

	NADirectionsTimeAndImpedanceAttributeMismatch = 5029,

	NAInvalidDirectionsRoadClassAttribute = 5030,

	NAStopIsUnreachable = 5031,

	NAStopTimeWindowStartsBeforeUnixEpoch = 5032,

	NAStopTimeWindowIsInverted = 5033,

	NAWalkingModeRouteTooLarge = 5034,

	NAStopHasNullGeometry = 5035,

	NAPointBarrierHasNullGeometry = 5036,

	NAPolylineBarrierHasNullGeometry = 5037,

	NAPolygonBarrierHasNullGeometry = 5038,

	NAUnsupportedSearchWhereClause = 5039,

	NAInsufficientNumberOfFacilities = 5040,

	NAFacilityHasNullGeometry = 5041,

	NAFacilityHasInvalidAddedCostAttributeName = 5042,

	NAFacilityHasNegativeAddedCostAttribute = 5043,

	NAFacilityHasInvalidImpedanceCutoff = 5044,

	NAInsufficientNumberOfIncidents = 5045,

	NAIncidentHasNullGeometry = 5046,

	NAIncidentHasInvalidAddedCostAttributeName = 5047,

	NAIncidentHasNegativeAddedCostAttribute = 5048,

	NAInvalidTargetFacilityCount = 5049,

	NAIncidentHasInvalidImpedanceCutoff = 5050,

	NAStartTimeIsBeforeUnixEpoch = 5051,

	NAInvalidDefaultImpedanceCutoff = 5052,

	NAInvalidDefaultTargetFacilityCount = 5053,

	NAInvalidPolygonBufferDistance = 5054,

	NAPolylinesCannotBeReturned = 5055,

	NATimeWindowsWithNonTimeImpedance = 5056,

	NAUnsupportedStopType = 5057,

	NARouteStartsOrEndsOnWaypoint = 5058,

	NAWaypointsAndRestBreaksForbiddenReordering = 5059,

	NAWaypointHasTimeWindows = 5060,

	NAWaypointHasAddedCostAttribute = 5061,

	NAStopHasInvalidCurbApproach = 5062,

	NAPointBarrierHasInvalidCurbApproach = 5063,

	NAFacilityHasInvalidCurbApproach = 5064,

	NAIncidentHasInvalidCurbApproach = 5065,

	NANetworkDoesNotSupportDirections = 5066,

	NADirectionsLanguageNotFound = 5067,

	JSONParserInvalidToken = 6001,

	JSONParserInvalidCharacter = 6002,

	JSONParserInvalidUnicode = 6003,

	JSONParserInvalidJSONStart = 6004,

	JSONParserInvalidEndOfPair = 6005,

	JSONParserInvalidEndOfElement = 6006,

	JSONParserInvalidEscapeSequence = 6007,

	JSONParserInvalidEndOfFieldName = 6008,

	JSONParserInvalidStartOfFieldName = 6009,

	JSONParserInvalidStartOfComment = 6010,

	JSONParserInvalidDecDigit = 6011,

	JSONParserInvalidHexDigit = 6012,

	JSONParserExpectingNull = 6013,

	JSONParserExpectingTrue = 6014,

	JSONParserExpectingFalse = 6015,

	JSONParserExpectingClosingQuote = 6016,

	JSONParserExpectingNan = 6017,

	JSONParserExpectingEndOfComment = 6018,

	JSONParserUnexpectedEndOfData = 6019,

	JSONObjectExpectingStartObject = 6020,

	JSONObjectExpectingStartArray = 6021,

	JSONObjectExpectingValueObject = 6022,

	JSONObjectExpectingValueArray = 6023,

	JSONObjectExpectingValueInt32 = 6024,

	JSONObjectExpectingIntegerType = 6025,

	JSONObjectExpectingNumberType = 6026,

	JSONObjectExpectingValueString = 6027,

	JSONObjectExpectingValueBool = 6028,

	JSONObjectIteratorNotStarted = 6029,

	JSONObjectIteratorIsFinished = 6030,

	JSONObjectKeyNotFound = 6031,

	JSONObjectIndexOutOfRange = 6032,

	JSONStringWriterJSONIsComplete = 6033,

	JSONStringWriterInvalidJSONInput = 6034,

	JSONStringWriterExpectingContainer = 6035,

	JSONStringWriterExpectingKeyOrEndObject = 6036,

	JSONStringWriterExpectingValueOrEndArray = 6037,

	JSONStringWriterExpectingValue = 6038,

	MappingMissingSpatialReference = 7001,

	MappingMissingInitialViewpoint = 7002,

	MappingInvalidResponse = 7003,

	MappingMissingBingMapsKey = 7004,

	MappingUnsupportedLayerType = 7005,

	MappingSyncNotEnabled = 7006,

	MappingTileExportNotEnabled = 7007,

	MappingMissingItemProperty = 7008,

	MappingWebmapNotSupported = 7009,

	MappingSpatialReferenceInvalid = 7011,

	MappingPackageUnpackRequired = 7012,

	MappingUnsupportedElevationFormat = 7013,

	MappingWebsceneNotSupported = 7014,

	MappingNotLoaded = 7015,

	MappingScheduledUpdatesNotSupported = 7016,

	MappingUtilityNetworkTraceFailed = 7017,

	LicensingUnlicensedFeature = 8001,

	LicensingLicenseLevelFixed = 8002,

	LicensingLicenseLevelAlreadySet = 8003,

	LicensingMainLicenseNotSet = 8004,

	LicensingUnlicensedExtension = 8005,

	LicensingPortalUserWithNoLicense = 8006,

	LocalServerServerFailedToStart = 9001,

	LocalServerServiceFailedToStart = 9002,

	LocalServerServiceTerminatedUnexpectedly = 9003,

	LocalServerServerFailed = 9004,

	LocalServerServiceFailed = 9005,

	StdIosBaseFailure = 10001,

	StdBadArrayNewLength = 10002,

	StdUnderflowError = 10003,

	StdSystemError = 10004,

	StdRangeError = 10005,

	StdOverflowError = 10006,

	StdOutOfRange = 10007,

	StdLengthError = 10008,

	StdInvalidArgument = 10009,

	StdFutureError = 10010,

	StdDomainError = 10011,

	StdRuntimeError = 10012,

	StdLogicError = 10013,

	StdBadWeakPtr = 10014,

	StdBadTypeId = 10015,

	StdBadFunctionCall = 10016,

	StdBadException = 10017,

	StdBadCast = 10018,

	StdBadAlloc = 10019,

	StdException = 10020,

	NavigationReroutingNotSupportedByService = 13001
}

declare var AGSErrorDomain: string;

declare class AGSEstimateTileCacheSizeJob extends AGSJob {

	static alloc(): AGSEstimateTileCacheSizeJob; // inherited from NSObject

	static new(): AGSEstimateTileCacheSizeJob; // inherited from NSObject

	readonly result: AGSEstimateTileCacheSizeResult;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: AGSEstimateTileCacheSizeResult, p2: NSError) => void): void;
}

declare class AGSEstimateTileCacheSizeResult extends AGSObject {

	static alloc(): AGSEstimateTileCacheSizeResult; // inherited from NSObject

	static new(): AGSEstimateTileCacheSizeResult; // inherited from NSObject

	readonly fileSize: number;

	readonly tileCount: number;
}

declare class AGSExpiration extends AGSObject {

	static alloc(): AGSExpiration; // inherited from NSObject

	static new(): AGSExpiration; // inherited from NSObject

	readonly dateTime: Date;

	readonly expirationType: AGSExpirationType;

	readonly expired: boolean;

	readonly message: string;
}

declare const enum AGSExpirationType {

	AllowExpiredAccess = 0,

	PreventExpiredAccess = 1
}

declare class AGSExportTileCacheJob extends AGSJob {

	static alloc(): AGSExportTileCacheJob; // inherited from NSObject

	static new(): AGSExportTileCacheJob; // inherited from NSObject

	readonly result: AGSTileCache;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: AGSTileCache, p2: NSError) => void): void;
}

declare class AGSExportTileCacheParameters extends AGSObject {

	static alloc(): AGSExportTileCacheParameters; // inherited from NSObject

	static new(): AGSExportTileCacheParameters; // inherited from NSObject

	static tileCacheParameters(): AGSExportTileCacheParameters;

	areaOfInterest: AGSGeometry;

	compressionQuality: number;

	levelIDs: NSArray<number>;
}

declare class AGSExportTileCacheTask extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSExportTileCacheTask; // inherited from NSObject

	static exportTileCacheTaskWithURL(URL: NSURL): AGSExportTileCacheTask;

	static new(): AGSExportTileCacheTask; // inherited from NSObject

	readonly mapServiceInfo: AGSArcGISMapServiceInfo;

	constructor(o: { URL: NSURL; });

	estimateTileCacheSizeJobWithParameters(parameters: AGSExportTileCacheParameters): AGSEstimateTileCacheSizeJob;

	exportTileCacheJobWithParametersDownloadFileURL(parameters: AGSExportTileCacheParameters, downloadFileURL: NSURL): AGSExportTileCacheJob;

	exportTileCacheParametersWithAreaOfInterestMinScaleMaxScaleCompletion(areaOfInterest: AGSGeometry, minScale: number, maxScale: number, completion: (p1: AGSExportTileCacheParameters, p2: NSError) => void): AGSCancelable;

	initWithURL(URL: NSURL): this;
}

declare class AGSExportVectorTilesJob extends AGSJob {

	static alloc(): AGSExportVectorTilesJob; // inherited from NSObject

	static new(): AGSExportVectorTilesJob; // inherited from NSObject

	readonly itemResourceCacheDownloadDirectory: NSURL;

	readonly parameters: AGSExportVectorTilesParameters;

	readonly result: AGSExportVectorTilesResult;

	readonly vectorTileCacheDownloadFileURL: NSURL;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: AGSExportVectorTilesResult, p2: NSError) => void): void;
}

declare class AGSExportVectorTilesParameters extends AGSObject {

	static alloc(): AGSExportVectorTilesParameters; // inherited from NSObject

	static exportVectorTilesParameters(): AGSExportVectorTilesParameters;

	static new(): AGSExportVectorTilesParameters; // inherited from NSObject

	areaOfInterest: AGSGeometry;

	maxLevel: number;
}

declare class AGSExportVectorTilesResult extends AGSObject {

	static alloc(): AGSExportVectorTilesResult; // inherited from NSObject

	static new(): AGSExportVectorTilesResult; // inherited from NSObject

	readonly itemResourceCache: AGSItemResourceCache;

	readonly vectorTileCache: AGSVectorTileCache;
}

declare class AGSExportVectorTilesTask extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSExportVectorTilesTask; // inherited from NSObject

	static exportVectorTilesTaskWithPortalItem(portalItem: AGSPortalItem): AGSExportVectorTilesTask;

	static exportVectorTilesTaskWithURL(URL: NSURL): AGSExportVectorTilesTask;

	static new(): AGSExportVectorTilesTask; // inherited from NSObject

	readonly hasStyleResources: boolean;

	readonly portalItem: AGSPortalItem;

	readonly vectorTileSourceInfo: AGSVectorTileSourceInfo;

	constructor(o: { portalItem: AGSPortalItem; });

	constructor(o: { URL: NSURL; });

	defaultExportVectorTilesParametersWithAreaOfInterestMaxScaleCompletion(areaOfInterest: AGSGeometry, maxScale: number, completion: (p1: AGSExportVectorTilesParameters, p2: NSError) => void): AGSCancelable;

	exportStyleResourceCacheJobWithDownloadDirectory(downloadDirectory: NSURL): AGSExportVectorTilesJob;

	exportVectorTilesJobWithParametersDownloadFileURL(parameters: AGSExportVectorTilesParameters, downloadFileURL: NSURL): AGSExportVectorTilesJob;

	exportVectorTilesJobWithParametersVectorTileCacheDownloadFileURLItemResourceCacheDownloadDirectory(parameters: AGSExportVectorTilesParameters, vectorTileCacheDownloadFileURL: NSURL, itemResourceCacheDownloadDirectory: NSURL): AGSExportVectorTilesJob;

	initWithPortalItem(portalItem: AGSPortalItem): this;

	initWithURL(URL: NSURL): this;
}

declare class AGSExtensionLicense extends AGSObject {

	static alloc(): AGSExtensionLicense; // inherited from NSObject

	static new(): AGSExtensionLicense; // inherited from NSObject

	readonly expiry: Date;

	readonly licenseStatus: AGSLicenseStatus;

	readonly name: string;

	readonly permanent: boolean;
}

declare const enum AGSExtrusionMode {

	None = 0,

	Minimum = 1,

	Maximum = 2,

	AbsoluteHeight = 3,

	BaseHeight = 4
}

declare class AGSFacility extends AGSObject implements NSCopying {

	static alloc(): AGSFacility; // inherited from NSObject

	static facilityWithPoint(point: AGSPoint): AGSFacility;

	static new(): AGSFacility; // inherited from NSObject

	curbApproach: AGSCurbApproach;

	currentBearing: number;

	currentBearingTolerance: number;

	readonly distanceToNetworkLocation: number;

	facilityID: number;

	readonly geometry: AGSPoint;

	impedanceCutoff: number;

	readonly locationStatus: AGSLocationStatus;

	name: string;

	navigationLatency: number;

	navigationSpeed: number;

	networkLocation: AGSNetworkLocation;

	constructor(o: { point: AGSPoint; });

	addedCostForCostAttribute(attributeName: string): number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPoint(point: AGSPoint): this;

	setAddedCostForCostAttribute(addedCost: number, attributeName: string): void;
}

declare class AGSFeature extends AGSObject implements AGSGeoElement {

	static alloc(): AGSFeature; // inherited from NSObject

	static new(): AGSFeature; // inherited from NSObject

	readonly featureTable: AGSFeatureTable;

	readonly attributes: NSMutableDictionary<string, any>; // inherited from AGSGeoElement

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	geometry: AGSGeometry; // inherited from AGSGeoElement

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	refresh(): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSFeatureCollection extends AGSLoadableBase implements AGSJSONSerializable {

	static alloc(): AGSFeatureCollection; // inherited from NSObject

	static featureCollection(): AGSFeatureCollection;

	static featureCollectionWithFeatureCollectionTables(featureCollectionTables: NSArray<AGSFeatureCollectionTable> | AGSFeatureCollectionTable[]): AGSFeatureCollection;

	static featureCollectionWithItem(item: AGSItem): AGSFeatureCollection;

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSFeatureCollection; // inherited from NSObject

	item: AGSItem;

	readonly tables: NSMutableArray<AGSFeatureCollectionTable>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { featureCollectionTables: NSArray<AGSFeatureCollectionTable> | AGSFeatureCollectionTable[]; });

	constructor(o: { item: AGSItem; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFeatureCollectionTables(featureCollectionTables: NSArray<AGSFeatureCollectionTable> | AGSFeatureCollectionTable[]): this;

	initWithItem(item: AGSItem): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveAsPortalTagsFolderItemDescriptionThumbnailCompletion(title: string, portal: AGSPortal, tags: NSArray<string> | string[], folder: AGSPortalFolder, itemDescription: string, thumbnail: UIImage, completion: (p1: NSError) => void): AGSCancelable;

	saveWithCompletion(completion: (p1: NSError) => void): AGSCancelable;

	self(): this;

	toJSON(): any;
}

declare class AGSFeatureCollectionLayer extends AGSLayer {

	static alloc(): AGSFeatureCollectionLayer; // inherited from NSObject

	static featureCollectionLayerWithFeatureCollection(featureCollection: AGSFeatureCollection): AGSFeatureCollectionLayer;

	static new(): AGSFeatureCollectionLayer; // inherited from NSObject

	readonly featureCollection: AGSFeatureCollection;

	readonly layers: NSArray<AGSFeatureLayer>;

	constructor(o: { featureCollection: AGSFeatureCollection; });

	initWithFeatureCollection(featureCollection: AGSFeatureCollection): this;
}

declare class AGSFeatureCollectionTable extends AGSFeatureTable implements AGSFeatureSet {

	static alloc(): AGSFeatureCollectionTable; // inherited from NSObject

	static featureCollectionTableWithFeatureSet(featureSet: AGSFeatureSet): AGSFeatureCollectionTable;

	static featureCollectionTableWithFieldsGeometryTypeSpatialReference(fields: NSArray<AGSField> | AGSField[], geometryType: AGSGeometryType, spatialReference: AGSSpatialReference): AGSFeatureCollectionTable;

	static featureCollectionTableWithFieldsGeometryTypeSpatialReferenceHasZHasM(fields: NSArray<AGSField> | AGSField[], geometryType: AGSGeometryType, spatialReference: AGSSpatialReference, hasZ: boolean, hasM: boolean): AGSFeatureCollectionTable;

	static featureCollectionTableWithGeoElementsFields(geoElements: NSArray<AGSGeoElement> | AGSGeoElement[], fields: NSArray<AGSField> | AGSField[]): AGSFeatureCollectionTable;

	static new(): AGSFeatureCollectionTable; // inherited from NSObject

	readonly layerInfo: AGSArcGISFeatureLayerInfo;

	renderer: AGSRenderer;

	title: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fields: NSArray<AGSField>; // inherited from AGSFeatureSet

	readonly geometryType: AGSGeometryType; // inherited from AGSFeatureSet

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly spatialReference: AGSSpatialReference; // inherited from AGSFeatureSet

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { featureSet: AGSFeatureSet; });

	constructor(o: { fields: NSArray<AGSField> | AGSField[]; geometryType: AGSGeometryType; spatialReference: AGSSpatialReference; });

	constructor(o: { fields: NSArray<AGSField> | AGSField[]; geometryType: AGSGeometryType; spatialReference: AGSSpatialReference; hasZ: boolean; hasM: boolean; });

	constructor(o: { geoElements: NSArray<AGSGeoElement> | AGSGeoElement[]; fields: NSArray<AGSField> | AGSField[]; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	featureEnumerator(): AGSFeatureEnumerator;

	initWithFeatureSet(featureSet: AGSFeatureSet): this;

	initWithFieldsGeometryTypeSpatialReference(fields: NSArray<AGSField> | AGSField[], geometryType: AGSGeometryType, spatialReference: AGSSpatialReference): this;

	initWithFieldsGeometryTypeSpatialReferenceHasZHasM(fields: NSArray<AGSField> | AGSField[], geometryType: AGSGeometryType, spatialReference: AGSSpatialReference, hasZ: boolean, hasM: boolean): this;

	initWithGeoElementsFields(geoElements: NSArray<AGSGeoElement> | AGSGeoElement[], fields: NSArray<AGSField> | AGSField[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setSymbolOverrideForFeature(symbol: AGSSymbol, feature: AGSFeature): void;

	symbolOverrideForFeature(feature: AGSFeature): AGSSymbol;
}

declare class AGSFeatureEditResult extends AGSEditResult {

	static alloc(): AGSFeatureEditResult; // inherited from NSObject

	static new(): AGSFeatureEditResult; // inherited from NSObject

	readonly attachmentResults: NSArray<AGSEditResult>;
}

declare class AGSFeatureEnumerator extends NSEnumerator<NSObject> {

	static alloc(): AGSFeatureEnumerator; // inherited from NSObject

	static new(): AGSFeatureEnumerator; // inherited from NSObject

	hasNextObject(): boolean;

	nextObject(): AGSFeature;

	reset(): void;
}

declare class AGSFeatureLayer extends AGSLayer implements AGSPopupSource, AGSTimeAware {

	static alloc(): AGSFeatureLayer; // inherited from NSObject

	static featureLayer(): AGSFeatureLayer;

	static featureLayerWithFeatureTable(featureTable: AGSFeatureTable): AGSFeatureLayer;

	static featureLayerWithItemLayerID(item: AGSItem, layerID: number): AGSFeatureLayer;

	static new(): AGSFeatureLayer; // inherited from NSObject

	definitionExpression: string;

	readonly featureTable: AGSFeatureTable;

	readonly labelDefinitions: NSMutableArray<AGSLabelDefinition>;

	labelsEnabled: boolean;

	refreshInterval: number;

	renderer: AGSRenderer;

	renderingMode: AGSFeatureRenderingMode;

	scaleSymbols: boolean;

	sceneProperties: AGSLayerSceneProperties;

	selectionColor: UIColor;

	selectionWidth: number;

	readonly unknownJSON: NSDictionary<string, any>;

	readonly unsupportedJSON: NSDictionary<string, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fullTimeExtent: AGSTimeExtent; // inherited from AGSTimeAware

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	popupDefinition: AGSPopupDefinition; // inherited from AGSPopupSource

	popupEnabled: boolean; // inherited from AGSPopupSource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly supportsTimeFiltering: boolean; // inherited from AGSTimeAware

	timeFilteringEnabled: boolean; // inherited from AGSTimeAware

	readonly timeInterval: AGSTimeValue; // inherited from AGSTimeAware

	timeOffset: AGSTimeValue; // inherited from AGSTimeAware

	readonly  // inherited from NSObjectProtocol

	constructor(o: { featureTable: AGSFeatureTable; });

	constructor(o: { item: AGSItem; layerID: number; });

	class(): typeof NSObject;

	clearSelection(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getSelectedFeaturesWithCompletion(completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	initWithFeatureTable(featureTable: AGSFeatureTable): this;

	initWithItemLayerID(item: AGSItem, layerID: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetFeaturesVisible(): void;

	resetRenderer(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectFeature(feature: AGSFeature): void;

	selectFeatures(features: NSArray<AGSFeature> | AGSFeature[]): void;

	selectFeaturesWithQueryModeCompletion(parameters: AGSQueryParameters, mode: AGSSelectionMode, completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	self(): this;

	setFeatureVisible(feature: AGSFeature, visible: boolean): void;

	setFeaturesVisible(features: NSArray<AGSFeature> | AGSFeature[], visible: boolean): void;

	unselectFeature(feature: AGSFeature): void;

	unselectFeatures(features: NSArray<AGSFeature> | AGSFeature[]): void;
}

declare class AGSFeatureQueryResult extends AGSObject implements AGSFeatureSet {

	static alloc(): AGSFeatureQueryResult; // inherited from NSObject

	static new(): AGSFeatureQueryResult; // inherited from NSObject

	readonly transferLimitExceeded: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fields: NSArray<AGSField>; // inherited from AGSFeatureSet

	readonly geometryType: AGSGeometryType; // inherited from AGSFeatureSet

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly spatialReference: AGSSpatialReference; // inherited from AGSFeatureSet

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	featureEnumerator(): AGSFeatureEnumerator;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum AGSFeatureRenderingMode {

	Automatic = 0,

	Static = 1,

	Dynamic = 2
}

declare const enum AGSFeatureRequestMode {

	Undefined = 0,

	OnInteractionCache = 1,

	OnInteractionNoCache = 2,

	ManualCache = 3
}

declare class AGSFeatureServiceCapabilities extends AGSObject {

	static alloc(): AGSFeatureServiceCapabilities; // inherited from NSObject

	static new(): AGSFeatureServiceCapabilities; // inherited from NSObject

	readonly supportsCreate: boolean;

	readonly supportsDelete: boolean;

	readonly supportsEditing: boolean;

	readonly supportsQuery: boolean;

	readonly supportsSync: boolean;

	readonly supportsUpdate: boolean;
}

declare class AGSFeatureServiceLayerIDInfo extends AGSIDInfo {

	static alloc(): AGSFeatureServiceLayerIDInfo; // inherited from NSObject

	static new(): AGSFeatureServiceLayerIDInfo; // inherited from NSObject

	readonly defaultVisibility: boolean;

	readonly geometryType: AGSGeometryType;

	readonly maxScale: number;

	readonly minScale: number;

	readonly serviceType: AGSArcGISFeatureLayerInfoServiceType;
}

interface AGSFeatureSet extends NSObjectProtocol {

	fields: NSArray<AGSField>;

	geometryType: AGSGeometryType;

	spatialReference: AGSSpatialReference;

	featureEnumerator(): AGSFeatureEnumerator;
}
declare var AGSFeatureSet: {

	prototype: AGSFeatureSet;
};

declare class AGSFeatureSubtype extends AGSObject {

	static alloc(): AGSFeatureSubtype; // inherited from NSObject

	static new(): AGSFeatureSubtype; // inherited from NSObject

	readonly code: any;

	readonly domains: NSDictionary<string, AGSDomain>;

	readonly name: string;

	readonly prototypeAttributes: NSDictionary<string, any>;
}

declare class AGSFeatureTable extends AGSLoadableBase implements AGSPopupSource {

	static alloc(): AGSFeatureTable; // inherited from NSObject

	static new(): AGSFeatureTable; // inherited from NSObject

	readonly canAddFeature: boolean;

	readonly canEditGeometry: boolean;

	displayName: string;

	readonly editable: boolean;

	readonly extent: AGSEnvelope;

	readonly featureLayer: AGSFeatureLayer;

	readonly fields: NSArray<AGSField>;

	readonly geometryType: AGSGeometryType;

	readonly hasGeometry: boolean;

	readonly hasM: boolean;

	readonly hasZ: boolean;

	readonly layer: AGSLayer;

	readonly numberOfFeatures: number;

	readonly spatialReference: AGSSpatialReference;

	readonly tableName: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	popupDefinition: AGSPopupDefinition; // inherited from AGSPopupSource

	popupEnabled: boolean; // inherited from AGSPopupSource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addFeatureCompletion(feature: AGSFeature, completion: (p1: NSError) => void): AGSCancelable;

	addFeaturesCompletion(features: NSArray<AGSFeature> | AGSFeature[], completion: (p1: NSError) => void): AGSCancelable;

	canDeleteFeature(feature: AGSFeature): boolean;

	canUpdateFeature(feature: AGSFeature): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createFeature(): AGSFeature;

	createFeatureWithAttributesGeometry(attributes: NSDictionary<string, any>, geometry: AGSGeometry): AGSFeature;

	deleteFeatureCompletion(feature: AGSFeature, completion: (p1: NSError) => void): AGSCancelable;

	deleteFeaturesCompletion(features: NSArray<AGSFeature> | AGSFeature[], completion: (p1: NSError) => void): AGSCancelable;

	fieldForName(fieldName: string): AGSField;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	queryExtentWithParametersCompletion(parameters: AGSQueryParameters, completion: (p1: AGSEnvelope, p2: NSError) => void): AGSCancelable;

	queryFeatureCountWithParametersCompletion(parameters: AGSQueryParameters, completion: (p1: number, p2: NSError) => void): AGSCancelable;

	queryFeaturesWithParametersCompletion(parameters: AGSQueryParameters, completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	queryStatisticsWithParametersCompletion(parameters: AGSStatisticsQueryParameters, completion: (p1: AGSStatisticsQueryResult, p2: NSError) => void): AGSCancelable;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateFeatureCompletion(feature: AGSFeature, completion: (p1: NSError) => void): AGSCancelable;

	updateFeaturesCompletion(features: NSArray<AGSFeature> | AGSFeature[], completion: (p1: NSError) => void): AGSCancelable;
}

declare class AGSFeatureTemplate extends AGSObject {

	static alloc(): AGSFeatureTemplate; // inherited from NSObject

	static new(): AGSFeatureTemplate; // inherited from NSObject

	readonly drawingTool: AGSDrawingTool;

	readonly featureDescription: string;

	readonly name: string;

	readonly prototypeAttributes: NSDictionary<string, any>;
}

declare class AGSFeatureType extends AGSObject {

	static alloc(): AGSFeatureType; // inherited from NSObject

	static new(): AGSFeatureType; // inherited from NSObject

	readonly domains: NSDictionary<string, AGSDomain>;

	readonly name: string;

	readonly templates: NSArray<AGSFeatureTemplate>;

	readonly typeID: any;
}

declare class AGSField extends AGSObject implements AGSJSONSerializable {

	static alloc(): AGSField; // inherited from NSObject

	static dateFieldWithNameAlias(name: string, alias: string): AGSField;

	static doubleFieldWithNameAlias(name: string, alias: string): AGSField;

	static fieldWithFieldTypeNameAliasLengthDomainEditableAllowNull(fieldType: AGSFieldType, name: string, alias: string, length: number, domain: AGSDomain, editable: boolean, allowNull: boolean): AGSField;

	static floatFieldWithNameAlias(name: string, alias: string): AGSField;

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static longIntFieldWithNameAlias(name: string, alias: string): AGSField;

	static new(): AGSField; // inherited from NSObject

	static shortIntFieldWithNameAlias(name: string, alias: string): AGSField;

	static textFieldWithNameAliasLength(name: string, alias: string, length: number): AGSField;

	readonly alias: string;

	readonly allowNull: boolean;

	readonly domain: AGSDomain;

	readonly editable: boolean;

	readonly length: number;

	readonly name: string;

	readonly type: AGSFieldType;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { fieldType: AGSFieldType; name: string; alias: string; length: number; domain: AGSDomain; editable: boolean; allowNull: boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFieldTypeNameAliasLengthDomainEditableAllowNull(fieldType: AGSFieldType, name: string, alias: string, length: number, domain: AGSDomain, editable: boolean, allowNull: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare const enum AGSFieldType {

	Unknown = -1,

	Int16 = 0,

	Int32 = 1,

	GUID = 3,

	Float = 4,

	Double = 5,

	Date = 6,

	Text = 7,

	OID = 8,

	GlobalID = 9,

	Blob = 10,

	Geometry = 11,

	Raster = 12,

	XML = 13
}

declare class AGSFillSymbol extends AGSSymbol {

	static alloc(): AGSFillSymbol; // inherited from NSObject

	static new(): AGSFillSymbol; // inherited from NSObject

	color: UIColor;

	outline: AGSLineSymbol;
}

declare class AGSFillSymbolLayer extends AGSSymbolLayer {

	static alloc(): AGSFillSymbolLayer; // inherited from NSObject

	static new(): AGSFillSymbolLayer; // inherited from NSObject
}

declare const enum AGSFontDecoration {

	LineThrough = 0,

	None = 1,

	Underline = 2
}

declare const enum AGSFontStyle {

	Italic = 0,

	Normal = 1,

	Oblique = 2
}

declare const enum AGSFontWeight {

	Bold = 0,

	Normal = 1
}

declare class AGSFrameCameraAddRastersParameters extends AGSAddRastersParameters {

	static addRastersParameters(): AGSFrameCameraAddRastersParameters; // inherited from AGSAddRastersParameters

	static alloc(): AGSFrameCameraAddRastersParameters; // inherited from NSObject

	static frameCameraAddRastersParameters(): AGSFrameCameraAddRastersParameters;

	static new(): AGSFrameCameraAddRastersParameters; // inherited from NSObject

	camerasFileURL: NSURL;

	framesFileURL: NSURL;

	shareRasterInfo: boolean;
}

declare const enum AGSGARSConversionMode {

	LowerLeft = 0,

	Center = 1
}

declare class AGSGPXLocationDataSource extends AGSSimulatedLocationDataSource implements AGSRemoteResource {

	static GPXLocationDataSourceWithData(gpxData: NSData): AGSGPXLocationDataSource;

	static GPXLocationDataSourceWithName(name: string): AGSGPXLocationDataSource;

	static GPXLocationDataSourceWithURL(URL: NSURL): AGSGPXLocationDataSource;

	static alloc(): AGSGPXLocationDataSource; // inherited from NSObject

	static new(): AGSGPXLocationDataSource; // inherited from NSObject

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { data: NSData; });

	constructor(o: { name: string; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithData(gpxData: NSData): this;

	initWithName(name: string): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSGenerateGeodatabaseJob extends AGSJob {

	static alloc(): AGSGenerateGeodatabaseJob; // inherited from NSObject

	static new(): AGSGenerateGeodatabaseJob; // inherited from NSObject

	readonly result: AGSGeodatabase;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: AGSGeodatabase, p2: NSError) => void): void;
}

declare class AGSGenerateGeodatabaseParameters extends AGSObject {

	static alloc(): AGSGenerateGeodatabaseParameters; // inherited from NSObject

	static generateGeodatabaseParameters(): AGSGenerateGeodatabaseParameters;

	static new(): AGSGenerateGeodatabaseParameters; // inherited from NSObject

	attachmentSyncDirection: AGSAttachmentSyncDirection;

	extent: AGSGeometry;

	layerOptions: NSArray<AGSGenerateLayerOption>;

	outSpatialReference: AGSSpatialReference;

	returnAttachments: boolean;

	syncModel: AGSSyncModel;
}

declare class AGSGenerateLayerOption extends AGSObject implements NSCopying {

	static alloc(): AGSGenerateLayerOption; // inherited from NSObject

	static generateLayerOption(): AGSGenerateLayerOption;

	static generateLayerOptionWithLayerID(layerID: number): AGSGenerateLayerOption;

	static generateLayerOptionWithLayerIDIncludeRelated(layerID: number, includeRelated: boolean): AGSGenerateLayerOption;

	static generateLayerOptionWithLayerIDWhereClause(layerID: number, whereClause: string): AGSGenerateLayerOption;

	static new(): AGSGenerateLayerOption; // inherited from NSObject

	includeRelated: boolean;

	layerID: number;

	queryOption: AGSGenerateLayerQueryOption;

	useGeometry: boolean;

	whereClause: string;

	constructor(o: { layerID: number; });

	constructor(o: { layerID: number; includeRelated: boolean; });

	constructor(o: { layerID: number; whereClause: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithLayerID(layerID: number): this;

	initWithLayerIDIncludeRelated(layerID: number, includeRelated: boolean): this;

	initWithLayerIDWhereClause(layerID: number, whereClause: string): this;
}

declare const enum AGSGenerateLayerQueryOption {

	Unknown = -1,

	All = 0,

	None = 1,

	UseFilter = 2
}

declare class AGSGenerateOfflineMapJob extends AGSJob {

	static alloc(): AGSGenerateOfflineMapJob; // inherited from NSObject

	static new(): AGSGenerateOfflineMapJob; // inherited from NSObject

	readonly downloadDirectory: NSURL;

	readonly onlineMap: AGSMap;

	readonly parameterOverrides: AGSGenerateOfflineMapParameterOverrides;

	readonly parameters: AGSGenerateOfflineMapParameters;

	readonly result: AGSGenerateOfflineMapResult;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: AGSGenerateOfflineMapResult, p2: NSError) => void): void;
}

declare class AGSGenerateOfflineMapParameterOverrides extends AGSObject {

	static alloc(): AGSGenerateOfflineMapParameterOverrides; // inherited from NSObject

	static new(): AGSGenerateOfflineMapParameterOverrides; // inherited from NSObject

	exportTileCacheParameters: NSDictionary<AGSOfflineMapParametersKey, AGSExportTileCacheParameters>;

	exportVectorTilesParameters: NSDictionary<AGSOfflineMapParametersKey, AGSExportVectorTilesParameters>;

	generateGeodatabaseParameters: NSDictionary<AGSOfflineMapParametersKey, AGSGenerateGeodatabaseParameters>;
}

declare class AGSGenerateOfflineMapParameters extends AGSObject {

	static alloc(): AGSGenerateOfflineMapParameters; // inherited from NSObject

	static generateOfflineMapParameters(): AGSGenerateOfflineMapParameters;

	static generateOfflineMapParametersWithAreaOfInterestMinScaleMaxScale(areaOfInterest: AGSGeometry, minScale: number, maxScale: number): AGSGenerateOfflineMapParameters;

	static new(): AGSGenerateOfflineMapParameters; // inherited from NSObject

	areaOfInterest: AGSGeometry;

	attachmentSyncDirection: AGSAttachmentSyncDirection;

	continueOnErrors: boolean;

	definitionExpressionFilterEnabled: boolean;

	destinationTableRowFilter: AGSDestinationTableRowFilter;

	includeBasemap: boolean;

	itemInfo: AGSOfflineMapItemInfo;

	maxScale: number;

	minScale: number;

	referenceBasemapDirectory: NSURL;

	referenceBasemapFilename: string;

	returnLayerAttachmentOption: AGSReturnLayerAttachmentOption;

	returnSchemaOnlyForEditableLayers: boolean;

	constructor(o: { areaOfInterest: AGSGeometry; minScale: number; maxScale: number; });

	initWithAreaOfInterestMinScaleMaxScale(areaOfInterest: AGSGeometry, minScale: number, maxScale: number): this;
}

declare class AGSGenerateOfflineMapResult extends AGSObject {

	static alloc(): AGSGenerateOfflineMapResult; // inherited from NSObject

	static new(): AGSGenerateOfflineMapResult; // inherited from NSObject

	readonly hasErrors: boolean;

	readonly layerErrors: NSDictionary<AGSLayer, any>;

	readonly mobileMapPackage: AGSMobileMapPackage;

	readonly offlineMap: AGSMap;

	readonly tableErrors: NSDictionary<AGSFeatureTable, any>;
}

interface AGSGeoElement extends NSObjectProtocol {

	attributes: NSMutableDictionary<string, any>;

	geometry: AGSGeometry;
}
declare var AGSGeoElement: {

	prototype: AGSGeoElement;
};

declare class AGSGeoElementLineOfSight extends AGSLineOfSight {

	static alloc(): AGSGeoElementLineOfSight; // inherited from NSObject

	static lineOfSightWithObserverGeoElementTargetGeoElement(observerGeoElement: AGSGeoElement, targetGeoElement: AGSGeoElement): AGSGeoElementLineOfSight;

	static new(): AGSGeoElementLineOfSight; // inherited from NSObject

	readonly observerGeoElement: AGSGeoElement;

	observerOffsetX: number;

	observerOffsetY: number;

	observerOffsetZ: number;

	readonly targetGeoElement: AGSGeoElement;

	targetOffsetX: number;

	targetOffsetY: number;

	targetOffsetZ: number;

	constructor(o: { observerGeoElement: AGSGeoElement; targetGeoElement: AGSGeoElement; });

	initWithObserverGeoElementTargetGeoElement(observerGeoElement: AGSGeoElement, targetGeoElement: AGSGeoElement): this;
}

declare class AGSGeoElementViewshed extends AGSViewshed {

	static alloc(): AGSGeoElementViewshed; // inherited from NSObject

	static geoElementViewshedWithGeoElementHorizontalAngleVerticalAngleMinDistanceMaxDistanceHeadingOffsetPitchOffset(geoElement: AGSGeoElement, horizontalAngle: number, verticalAngle: number, minDistance: number, maxDistance: number, headingOffset: number, pitchOffset: number): AGSGeoElementViewshed;

	static new(): AGSGeoElementViewshed; // inherited from NSObject

	readonly geoElement: AGSGeoElement;

	headingOffset: number;

	offsetX: number;

	offsetY: number;

	offsetZ: number;

	pitchOffset: number;

	constructor(o: { geoElement: AGSGeoElement; horizontalAngle: number; verticalAngle: number; minDistance: number; maxDistance: number; headingOffset: number; pitchOffset: number; });

	initWithGeoElementHorizontalAngleVerticalAngleMinDistanceMaxDistanceHeadingOffsetPitchOffset(geoElement: AGSGeoElement, horizontalAngle: number, verticalAngle: number, minDistance: number, maxDistance: number, headingOffset: number, pitchOffset: number): this;
}

declare class AGSGeoPackage extends AGSLoadableBase {

	static alloc(): AGSGeoPackage; // inherited from NSObject

	static geoPackageWithFileURL(fileURL: NSURL): AGSGeoPackage;

	static geoPackageWithName(name: string): AGSGeoPackage;

	static new(): AGSGeoPackage; // inherited from NSObject

	readonly fileURL: NSURL;

	readonly geoPackageFeatureTables: NSArray<AGSGeoPackageFeatureTable>;

	readonly geoPackageRasters: NSArray<AGSGeoPackageRaster>;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { name: string; });

	initWithFileURL(fileURL: NSURL): this;

	initWithName(name: string): this;
}

declare class AGSGeoPackageFeatureTable extends AGSFeatureTable {

	static alloc(): AGSGeoPackageFeatureTable; // inherited from NSObject

	static new(): AGSGeoPackageFeatureTable; // inherited from NSObject

	readonly geoPackage: AGSGeoPackage;

	readonly tableDescription: string;
}

declare class AGSGeoPackageRaster extends AGSRaster {

	static alloc(): AGSGeoPackageRaster; // inherited from NSObject

	static new(): AGSGeoPackageRaster; // inherited from NSObject

	static rasterWithFileURL(fileURL: NSURL): AGSGeoPackageRaster; // inherited from AGSRaster

	static rasterWithNameExtension(name: string, extension: string): AGSGeoPackageRaster; // inherited from AGSRaster

	static rasterWithRasterFunction(rasterFunction: AGSRasterFunction): AGSGeoPackageRaster; // inherited from AGSRaster

	readonly geoPackage: AGSGeoPackage;

	readonly rasterDescription: string;
}

declare class AGSGeoView extends AGSOpenGLView {

	static alloc(): AGSGeoView; // inherited from NSObject

	static appearance(): AGSGeoView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AGSGeoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AGSGeoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSGeoView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AGSGeoView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSGeoView; // inherited from UIAppearance

	static new(): AGSGeoView; // inherited from NSObject

	readonly attributionText: string;

	attributionTextVisible: boolean;

	readonly attributionTopAnchor: NSLayoutYAxisAnchor;

	readonly callout: AGSCallout;

	readonly drawStatus: AGSDrawStatus;

	readonly graphicsOverlays: NSMutableArray<AGSGraphicsOverlay>;

	layerViewStateChangedHandler: (p1: AGSLayer, p2: AGSLayerViewState) => void;

	readonly navigating: boolean;

	releaseHardwareResourcesWhenBackgrounded: boolean;

	selectionProperties: AGSSelectionProperties;

	readonly spatialReference: AGSSpatialReference;

	timeExtent: AGSTimeExtent;

	touchDelegate: AGSGeoViewTouchDelegate;

	viewpointChangedHandler: () => void;

	readonly wrapAroundEnabled: boolean;

	currentViewpointWithType(viewpointType: AGSViewpointType): AGSViewpoint;

	exportImageWithCompletion(completion: (p1: UIImage, p2: NSError) => void): AGSCancelable;

	identifyGraphicsOverlayScreenPointToleranceReturnPopupsOnlyCompletion(graphicsOverlay: AGSGraphicsOverlay, screenPoint: CGPoint, tolerance: number, returnPopupsOnly: boolean, completion: (p1: AGSIdentifyGraphicsOverlayResult) => void): AGSCancelable;

	identifyGraphicsOverlayScreenPointToleranceReturnPopupsOnlyMaximumResultsCompletion(graphicsOverlay: AGSGraphicsOverlay, screenPoint: CGPoint, tolerance: number, returnPopupsOnly: boolean, maximumResults: number, completion: (p1: AGSIdentifyGraphicsOverlayResult) => void): AGSCancelable;

	identifyGraphicsOverlaysAtScreenPointToleranceReturnPopupsOnlyCompletion(screenPoint: CGPoint, tolerance: number, returnPopupsOnly: boolean, completion: (p1: NSArray<AGSIdentifyGraphicsOverlayResult>, p2: NSError) => void): AGSCancelable;

	identifyGraphicsOverlaysAtScreenPointToleranceReturnPopupsOnlyMaximumResultsPerOverlayCompletion(screenPoint: CGPoint, tolerance: number, returnPopupsOnly: boolean, maximumResultsPerOverlay: number, completion: (p1: NSArray<AGSIdentifyGraphicsOverlayResult>, p2: NSError) => void): AGSCancelable;

	identifyLayerScreenPointToleranceReturnPopupsOnlyCompletion(layer: AGSLayer, screenPoint: CGPoint, tolerance: number, returnPopupsOnly: boolean, completion: (p1: AGSIdentifyLayerResult) => void): AGSCancelable;

	identifyLayerScreenPointToleranceReturnPopupsOnlyMaximumResultsCompletion(layer: AGSLayer, screenPoint: CGPoint, tolerance: number, returnPopupsOnly: boolean, maximumResults: number, completion: (p1: AGSIdentifyLayerResult) => void): AGSCancelable;

	identifyLayersAtScreenPointToleranceReturnPopupsOnlyCompletion(screenPoint: CGPoint, tolerance: number, returnPopupsOnly: boolean, completion: (p1: NSArray<AGSIdentifyLayerResult>, p2: NSError) => void): AGSCancelable;

	identifyLayersAtScreenPointToleranceReturnPopupsOnlyMaximumResultsPerLayerCompletion(screenPoint: CGPoint, tolerance: number, returnPopupsOnly: boolean, maximumResultsPerLayer: number, completion: (p1: NSArray<AGSIdentifyLayerResult>, p2: NSError) => void): AGSCancelable;

	layerViewStateForLayer(layer: AGSLayer): AGSLayerViewState;

	setBookmarkCompletion(bookmark: AGSBookmark, completion: (p1: boolean) => void): AGSCancelable;

	setViewpoint(viewpoint: AGSViewpoint): void;

	setViewpointCompletion(viewpoint: AGSViewpoint, completion: (p1: boolean) => void): AGSCancelable;

	setViewpointDurationCompletion(viewpoint: AGSViewpoint, duration: number, completion: (p1: boolean) => void): AGSCancelable;
}

interface AGSGeoViewTouchDelegate extends NSObjectProtocol {

	geoViewDidCancelForceTouch?(geoView: AGSGeoView): void;

	geoViewDidCancelLongPress?(geoView: AGSGeoView): void;

	geoViewDidCancelTouchDrag?(geoView: AGSGeoView): void;

	geoViewDidChangeForceTouchAtScreenPointMapPointForce?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint, force: number): void;

	geoViewDidDoubleTapAtScreenPointMapPointCompletion?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint, completion: (p1: boolean) => void): void;

	geoViewDidEndForceTouchAtScreenPointMapPointForce?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint, force: number): void;

	geoViewDidEndLongPressAtScreenPointMapPoint?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint): void;

	geoViewDidForceTouchAtScreenPointMapPointForce?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint, force: number): void;

	geoViewDidLongPressAtScreenPointMapPoint?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint): void;

	geoViewDidMoveLongPressToScreenPointMapPoint?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint): void;

	geoViewDidTapAtScreenPointMapPoint?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint): void;

	geoViewDidTouchDownAtScreenPointMapPointCompletion?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint, completion: (p1: boolean) => void): void;

	geoViewDidTouchDragToScreenPointMapPoint?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint): void;

	geoViewDidTouchUpAtScreenPointMapPoint?(geoView: AGSGeoView, screenPoint: CGPoint, mapPoint: AGSPoint): void;
}
declare var AGSGeoViewTouchDelegate: {

	prototype: AGSGeoViewTouchDelegate;
};

declare class AGSGeocodeParameters extends AGSObject {

	static alloc(): AGSGeocodeParameters; // inherited from NSObject

	static geocodeParameters(): AGSGeocodeParameters;

	static new(): AGSGeocodeParameters; // inherited from NSObject

	categories: NSArray<string>;

	countryCode: string;

	forStorage: boolean;

	maxResults: number;

	minScore: number;

	outputLanguageCode: string;

	outputSpatialReference: AGSSpatialReference;

	preferredSearchLocation: AGSPoint;

	resultAttributeNames: NSArray<string>;

	searchArea: AGSGeometry;
}

declare class AGSGeocodeResult extends AGSObject {

	static alloc(): AGSGeocodeResult; // inherited from NSObject

	static new(): AGSGeocodeResult; // inherited from NSObject

	readonly attributes: NSDictionary<string, any>;

	readonly displayLocation: AGSPoint;

	readonly extent: AGSEnvelope;

	readonly inputLocation: AGSPoint;

	readonly label: string;

	readonly routeLocation: AGSPoint;

	readonly score: number;
}

declare class AGSGeodatabase extends AGSLoadableBase {

	static alloc(): AGSGeodatabase; // inherited from NSObject

	static geodatabaseWithFileURL(fileURL: NSURL): AGSGeodatabase;

	static geodatabaseWithName(name: string): AGSGeodatabase;

	static new(): AGSGeodatabase; // inherited from NSObject

	readonly fileURL: NSURL;

	readonly generateGeodatabaseExtent: AGSEnvelope;

	readonly generateGeodatabaseGeometry: AGSGeometry;

	readonly geodatabaseAnnotationTables: NSArray<AGSGeodatabaseFeatureTable>;

	readonly geodatabaseFeatureTables: NSArray<AGSGeodatabaseFeatureTable>;

	readonly inTransaction: boolean;

	readonly minServerGeneration: number;

	readonly serviceURL: NSURL;

	readonly syncEnabled: boolean;

	readonly syncID: NSUUID;

	readonly syncModel: AGSSyncModel;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { name: string; });

	beginTransaction(): boolean;

	close(): void;

	commitTransaction(): boolean;

	geodatabaseAnnotationTableWithServiceLayerID(serviceLayerID: number): AGSGeodatabaseFeatureTable;

	geodatabaseAnnotationTableWithTableName(tableName: string): AGSGeodatabaseFeatureTable;

	geodatabaseFeatureTableByServiceLayerID(serviceLayerID: number): AGSGeodatabaseFeatureTable;

	geodatabaseFeatureTableWithName(tableName: string): AGSGeodatabaseFeatureTable;

	hasLocalEdits(): boolean;

	initWithFileURL(fileURL: NSURL): this;

	initWithName(name: string): this;

	rollbackTransaction(): boolean;
}

interface AGSGeodatabaseDataset extends NSObjectProtocol {

	geodatabase: AGSGeodatabase;

	name: string;
}
declare var AGSGeodatabaseDataset: {

	prototype: AGSGeodatabaseDataset;
};

declare class AGSGeodatabaseFeatureTable extends AGSArcGISFeatureTable {

	static alloc(): AGSGeodatabaseFeatureTable; // inherited from NSObject

	static geodatabaseFeatureTableWithTableRelationshipInfo(table: AGSGeodatabaseFeatureTable, relationshipInfo: AGSRelationshipInfo): AGSGeodatabaseFeatureTable;

	static new(): AGSGeodatabaseFeatureTable; // inherited from NSObject

	readonly geodatabase: AGSGeodatabase;

	constructor(o: { table: AGSGeodatabaseFeatureTable; relationshipInfo: AGSRelationshipInfo; });

	hasLocalEditsSince(date: Date): boolean;

	initWithTableRelationshipInfo(table: AGSGeodatabaseFeatureTable, relationshipInfo: AGSRelationshipInfo): this;
}

declare class AGSGeodatabaseSyncTask extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSGeodatabaseSyncTask; // inherited from NSObject

	static geodatabaseSyncTaskWithURL(URL: NSURL): AGSGeodatabaseSyncTask;

	static importDeltaWithGeodatabaseDeltaPathCompletion(geodatabase: AGSGeodatabase, deltaPath: NSURL, completion: (p1: NSArray<AGSSyncLayerResult>, p2: NSError) => void): AGSCancelable;

	static new(): AGSGeodatabaseSyncTask; // inherited from NSObject

	readonly featureServiceInfo: AGSArcGISFeatureServiceInfo;

	constructor(o: { URL: NSURL; });

	defaultGenerateGeodatabaseParametersWithExtentCompletion(extent: AGSGeometry, completion: (p1: AGSGenerateGeodatabaseParameters, p2: NSError) => void): AGSCancelable;

	defaultSyncGeodatabaseParametersWithGeodatabaseCompletion(geodatabase: AGSGeodatabase, completion: (p1: AGSSyncGeodatabaseParameters, p2: NSError) => void): AGSCancelable;

	defaultSyncGeodatabaseParametersWithGeodatabaseSyncDirectionCompletion(geodatabase: AGSGeodatabase, syncDirection: AGSSyncDirection, completion: (p1: AGSSyncGeodatabaseParameters, p2: NSError) => void): AGSCancelable;

	generateJobWithParametersDownloadFileURL(parameters: AGSGenerateGeodatabaseParameters, downloadFileURL: NSURL): AGSGenerateGeodatabaseJob;

	importDeltaWithGeodatabaseInputPathCompletion(geodatabase: AGSGeodatabase, inputPath: string, completion: (p1: NSArray<AGSSyncLayerResult>, p2: NSError) => void): AGSCancelable;

	initWithURL(URL: NSURL): this;

	registerSyncEnabledGeodatabaseCompletion(geodatabase: AGSGeodatabase, completion: (p1: NSError) => void): AGSCancelable;

	syncJobWithParametersGeodatabase(parameters: AGSSyncGeodatabaseParameters, geodatabase: AGSGeodatabase): AGSSyncGeodatabaseJob;

	syncJobWithSyncDirectionRollbackOnFailureGeodatabase(syncDirection: AGSSyncDirection, rollbackOnFailure: boolean, geodatabase: AGSGeodatabase): AGSSyncGeodatabaseJob;

	unregisterGeodatabaseCompletion(geodatabase: AGSGeodatabase, completion: (p1: NSError) => void): AGSCancelable;

	unregisterGeodatabaseWithSyncIDCompletion(syncID: NSUUID, completion: (p1: NSError) => void): AGSCancelable;
}

declare class AGSGeodesicEllipseParameters extends AGSObject {

	static alloc(): AGSGeodesicEllipseParameters; // inherited from NSObject

	static geodesicEllipseParameters(): AGSGeodesicEllipseParameters;

	static new(): AGSGeodesicEllipseParameters; // inherited from NSObject

	static parametersWithAxisDirectionAngularUnitCenterLinearUnitMaxPointCountMaxSegmentLengthGeometryTypeSemiAxis1LengthSemiAxis2Length(axisDirection: number, angularUnit: AGSAngularUnit, center: AGSPoint, linearUnit: AGSLinearUnit, maxPointCount: number, maxSegmentLength: number, geometryType: AGSGeometryType, semiAxis1Length: number, semiAxis2Length: number): AGSGeodesicEllipseParameters;

	static parametersWithCenterMaxSegmentLengthSemiAxisLength(center: AGSPoint, maxSegmentLength: number, semiAxisLength: number): AGSGeodesicEllipseParameters;

	static parametersWithCenterSemiAxis1LengthSemiAxis2Length(center: AGSPoint, semiAxis1Length: number, semiAxis2Length: number): AGSGeodesicEllipseParameters;

	angularUnit: AGSAngularUnit;

	axisDirection: number;

	center: AGSPoint;

	geometryType: AGSGeometryType;

	linearUnit: AGSLinearUnit;

	maxPointCount: number;

	maxSegmentLength: number;

	semiAxis1Length: number;

	semiAxis2Length: number;

	constructor(o: { axisDirection: number; angularUnit: AGSAngularUnit; center: AGSPoint; linearUnit: AGSLinearUnit; maxPointCount: number; maxSegmentLength: number; geometryType: AGSGeometryType; semiAxis1Length: number; semiAxis2Length: number; });

	constructor(o: { center: AGSPoint; maxSegmentLength: number; semiAxisLength: number; });

	constructor(o: { center: AGSPoint; semiAxis1Length: number; semiAxis2Length: number; });

	initWithAxisDirectionAngularUnitCenterLinearUnitMaxPointCountMaxSegmentLengthGeometryTypeSemiAxis1LengthSemiAxis2Length(axisDirection: number, angularUnit: AGSAngularUnit, center: AGSPoint, linearUnit: AGSLinearUnit, maxPointCount: number, maxSegmentLength: number, geometryType: AGSGeometryType, semiAxis1Length: number, semiAxis2Length: number): this;

	initWithCenterMaxSegmentLengthSemiAxisLength(center: AGSPoint, maxSegmentLength: number, semiAxisLength: number): this;

	initWithCenterSemiAxis1LengthSemiAxis2Length(center: AGSPoint, semiAxis1Length: number, semiAxis2Length: number): this;
}

declare class AGSGeodesicSectorParameters extends AGSObject {

	static alloc(): AGSGeodesicSectorParameters; // inherited from NSObject

	static geodesicSectorParameters(): AGSGeodesicSectorParameters;

	static new(): AGSGeodesicSectorParameters; // inherited from NSObject

	static parametersWithAxisDirectionAngularUnitCenterLinearUnitMaxPointCountMaxSegmentLengthGeometryTypeSectorAngleSemiAxis1LengthSemiAxis2LengthStartDirection(axisDirection: number, angularUnit: AGSAngularUnit, center: AGSPoint, linearUnit: AGSLinearUnit, maxPointCount: number, maxSegmentLength: number, geometryType: AGSGeometryType, sectorAngle: number, semiAxis1Length: number, semiAxis2Length: number, startDirection: number): AGSGeodesicSectorParameters;

	static parametersWithCenterMaxSegmentLengthSemiAxisLength(center: AGSPoint, maxSegmentLength: number, semiAxisLength: number): AGSGeodesicSectorParameters;

	static parametersWithCenterSemiAxis1LengthSemiAxis2LengthSectorAngleStartDirection(center: AGSPoint, semiAxis1Length: number, semiAxis2Length: number, sectorAngle: number, startDirection: number): AGSGeodesicSectorParameters;

	angularUnit: AGSAngularUnit;

	axisDirection: number;

	center: AGSPoint;

	geometryType: AGSGeometryType;

	linearUnit: AGSLinearUnit;

	maxPointCount: number;

	maxSegmentLength: number;

	sectorAngle: number;

	semiAxis1Length: number;

	semiAxis2Length: number;

	startDirection: number;

	constructor(o: { axisDirection: number; angularUnit: AGSAngularUnit; center: AGSPoint; linearUnit: AGSLinearUnit; maxPointCount: number; maxSegmentLength: number; geometryType: AGSGeometryType; sectorAngle: number; semiAxis1Length: number; semiAxis2Length: number; startDirection: number; });

	constructor(o: { center: AGSPoint; maxSegmentLength: number; semiAxisLength: number; });

	constructor(o: { center: AGSPoint; semiAxis1Length: number; semiAxis2Length: number; sectorAngle: number; startDirection: number; });

	initWithAxisDirectionAngularUnitCenterLinearUnitMaxPointCountMaxSegmentLengthGeometryTypeSectorAngleSemiAxis1LengthSemiAxis2LengthStartDirection(axisDirection: number, angularUnit: AGSAngularUnit, center: AGSPoint, linearUnit: AGSLinearUnit, maxPointCount: number, maxSegmentLength: number, geometryType: AGSGeometryType, sectorAngle: number, semiAxis1Length: number, semiAxis2Length: number, startDirection: number): this;

	initWithCenterMaxSegmentLengthSemiAxisLength(center: AGSPoint, maxSegmentLength: number, semiAxisLength: number): this;

	initWithCenterSemiAxis1LengthSemiAxis2LengthSectorAngleStartDirection(center: AGSPoint, semiAxis1Length: number, semiAxis2Length: number, sectorAngle: number, startDirection: number): this;
}

declare const enum AGSGeodeticCurveType {

	Geodesic = 0,

	Loxodrome = 1,

	GreatElliptic = 2,

	NormalSection = 3,

	ShapePreserving = 4
}

declare class AGSGeodeticDistanceResult extends AGSObject {

	static alloc(): AGSGeodeticDistanceResult; // inherited from NSObject

	static new(): AGSGeodeticDistanceResult; // inherited from NSObject

	readonly azimuth1: number;

	readonly azimuth2: number;

	readonly azimuthUnit: AGSAngularUnit;

	readonly distance: number;

	readonly distanceUnit: AGSLinearUnit;
}

declare class AGSGeographicTransformation extends AGSDatumTransformation {

	static alloc(): AGSGeographicTransformation; // inherited from NSObject

	static geographicTransformationWithStep(step: AGSGeographicTransformationStep): AGSGeographicTransformation;

	static geographicTransformationWithSteps(steps: NSArray<AGSGeographicTransformationStep> | AGSGeographicTransformationStep[]): AGSGeographicTransformation;

	static new(): AGSGeographicTransformation; // inherited from NSObject

	readonly steps: NSArray<AGSGeographicTransformationStep>;

	constructor(o: { step: AGSGeographicTransformationStep; });

	constructor(o: { steps: NSArray<AGSGeographicTransformationStep> | AGSGeographicTransformationStep[]; });

	initWithStep(step: AGSGeographicTransformationStep): this;

	initWithSteps(steps: NSArray<AGSGeographicTransformationStep> | AGSGeographicTransformationStep[]): this;
}

declare class AGSGeographicTransformationStep extends AGSObject {

	static alloc(): AGSGeographicTransformationStep; // inherited from NSObject

	static geographicTransformationStepWithWKID(WKID: number): AGSGeographicTransformationStep;

	static geographicTransformationStepWithWKText(WKText: string): AGSGeographicTransformationStep;

	static new(): AGSGeographicTransformationStep; // inherited from NSObject

	readonly WKID: number;

	readonly WKText: string;

	readonly missingProjectionEngineFiles: boolean;

	readonly projectionEngineFilenames: NSArray<string>;

	constructor(o: { WKID: number; });

	constructor(o: { WKText: string; });

	initWithWKID(WKID: number): this;

	initWithWKText(WKText: string): this;

	inverse(): AGSGeographicTransformationStep;

	isEqualToGeographicTransformationStep(other: AGSGeographicTransformationStep): boolean;
}

declare class AGSGeometricEffect extends AGSObject {

	static alloc(): AGSGeometricEffect; // inherited from NSObject

	static new(): AGSGeometricEffect; // inherited from NSObject

	readonly type: AGSGeometricEffectType;

	isEqualToGeometricEffect(other: AGSGeometricEffect): boolean;
}

declare const enum AGSGeometricEffectType {

	Unknown = -1,

	DashGeometricEffect = 0
}

declare class AGSGeometry extends AGSObject implements AGSJSONSerializable, NSCopying {

	static alloc(): AGSGeometry; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSGeometry; // inherited from NSObject

	readonly dimension: AGSGeometryDimension;

	readonly empty: boolean;

	readonly extent: AGSEnvelope;

	readonly geometryType: AGSGeometryType;

	readonly hasCurves: boolean;

	readonly hasM: boolean;

	readonly hasZ: boolean;

	readonly spatialReference: AGSSpatialReference;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqual(object: any): boolean;

	isEqualToGeometry(other: AGSGeometry): boolean;

	isEqualToGeometryTolerance(other: AGSGeometry, tolerance: number): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toBuilder(): AGSGeometryBuilder;

	toJSON(): any;
}

declare class AGSGeometryBuilder extends AGSObject {

	static alloc(): AGSGeometryBuilder; // inherited from NSObject

	static builderWithGeometry(geometry: AGSGeometry): AGSGeometryBuilder;

	static builderWithGeometryTypeSpatialReference(geometryType: AGSGeometryType, sr: AGSSpatialReference): AGSGeometryBuilder;

	static new(): AGSGeometryBuilder; // inherited from NSObject

	readonly extent: AGSEnvelope;

	readonly geometryType: AGSGeometryType;

	readonly hasM: boolean;

	readonly hasZ: boolean;

	readonly spatialReference: AGSSpatialReference;

	isEmpty(): boolean;

	replaceGeometry(geometry: AGSGeometry): this;

	toGeometry(): AGSGeometry;
}

declare const enum AGSGeometryDimension {

	Point = 0,

	Curve = 1,

	Area = 2,

	Volume = 3,

	Unknown = -1
}

declare class AGSGeometryEngine extends AGSObject {

	static alloc(): AGSGeometryEngine; // inherited from NSObject

	static areaOfGeometry(geometry: AGSGeometry): number;

	static autoCompleteForExistingBoundariesNewBoundaries(existingBoundaries: NSArray<AGSGeometry> | AGSGeometry[], newBoundaries: NSArray<AGSPolyline> | AGSPolyline[]): NSArray<AGSPolygon>;

	static boundaryOfGeometry(geometry: AGSGeometry): AGSGeometry;

	static bufferGeometriesDistancesUnionResults(geometries: NSArray<AGSGeometry> | AGSGeometry[], distances: NSArray<number> | number[], unionResults: boolean): NSArray<AGSGeometry>;

	static bufferGeometryByDistance(geometry: AGSGeometry, distance: number): AGSPolygon;

	static clipGeometryWithEnvelope(geometry: AGSGeometry, envelope: AGSEnvelope): AGSGeometry;

	static combineExtentsOfGeometries(geometries: NSArray<AGSGeometry> | AGSGeometry[]): AGSEnvelope;

	static combineExtentsOfGeometryAndGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): AGSEnvelope;

	static convexHullForGeometriesMergeInputs(geometries: NSArray<AGSGeometry> | AGSGeometry[], mergeInputs: boolean): NSArray<AGSGeometry>;

	static convexHullForGeometry(geometry: AGSGeometry): AGSGeometry;

	static cutGeometryWithCutter(geometry: AGSGeometry, cutter: AGSPolyline): NSArray<AGSGeometry>;

	static densifyGeometryMaxSegmentLength(geometry: AGSGeometry, maxSegmentLength: number): AGSGeometry;

	static differenceOfGeometry1Geometry2(geometry1: AGSGeometry, geometry2: AGSGeometry): AGSGeometry;

	static distanceBetweenGeometry1Geometry2(geometry1: AGSGeometry, geometry2: AGSGeometry): number;

	static extendPolylineWithPolylineOptions(polyline: AGSPolyline, extender: AGSPolyline, options: AGSGeometryExtendOption): AGSPolyline;

	static fractionAlongLineToPointTolerance(line: AGSPolyline, point: AGSPoint, tolerance: number): number;

	static generalizeGeometryMaxDeviationRemoveDegenerateParts(geometry: AGSGeometry, maxDeviation: number, removeDegenerateParts: boolean): AGSGeometry;

	static geodesicEllipseWithParameters(params: AGSGeodesicEllipseParameters): AGSGeometry;

	static geodesicSectorWithParameters(params: AGSGeodesicSectorParameters): AGSGeometry;

	static geodeticAreaOfGeometryAreaUnitCurveType(geometry: AGSGeometry, areaUnit: AGSAreaUnit, curveType: AGSGeodeticCurveType): number;

	static geodeticBufferGeometriesDistancesDistanceUnitMaxDeviationCurveTypeUnionResults(geometries: NSArray<AGSGeometry> | AGSGeometry[], distances: NSArray<number> | number[], distanceUnit: AGSLinearUnit, maxDeviation: number, curveType: AGSGeodeticCurveType, unionResults: boolean): NSArray<AGSGeometry>;

	static geodeticBufferGeometryDistanceDistanceUnitMaxDeviationCurveType(geometry: AGSGeometry, distance: number, distanceUnit: AGSLinearUnit, maxDeviation: number, curveType: AGSGeodeticCurveType): AGSPolygon;

	static geodeticDensifyGeometryMaxSegmentLengthLengthUnitCurveType(geometry: AGSGeometry, maxSegmentLength: number, lengthUnit: AGSLinearUnit, curveType: AGSGeodeticCurveType): AGSGeometry;

	static geodeticDistanceBetweenPoint1Point2DistanceUnitAzimuthUnitCurveType(point1: AGSPoint, point2: AGSPoint, distanceUnit: AGSLinearUnit, azimuthUnit: AGSAngularUnit, curveType: AGSGeodeticCurveType): AGSGeodeticDistanceResult;

	static geodeticLengthOfGeometryLengthUnitCurveType(geometry: AGSGeometry, lengthUnit: AGSLinearUnit, curveType: AGSGeodeticCurveType): number;

	static geodeticMovePointsDistanceDistanceUnitAzimuthAzimuthUnitCurveType(points: NSArray<AGSPoint> | AGSPoint[], distance: number, distanceUnit: AGSLinearUnit, azimuth: number, azimuthUnit: AGSAngularUnit, curveType: AGSGeodeticCurveType): NSArray<AGSPoint>;

	static geometryByRemovingMFromGeometry(geometry: AGSGeometry): AGSGeometry;

	static geometryByRemovingZAndMFromGeometry(geometry: AGSGeometry): AGSGeometry;

	static geometryByRemovingZFromGeometry(geometry: AGSGeometry): AGSGeometry;

	static geometryBySettingMInGeometry(m: number, geometry: AGSGeometry): AGSGeometry;

	static geometryBySettingZInGeometry(z: number, geometry: AGSGeometry): AGSGeometry;

	static geometryBySettingZMInGeometry(z: number, m: number, geometry: AGSGeometry): AGSGeometry;

	static geometryContainsGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): boolean;

	static geometryCrossesGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): boolean;

	static geometryDisjointToGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): boolean;

	static geometryEqualsGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): boolean;

	static geometryIntersectsGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): boolean;

	static geometryIsSimple(geometry: AGSGeometry): boolean;

	static geometryOverlapsGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): boolean;

	static geometryRelatesToGeometryByRelation(geometry1: AGSGeometry, geometry2: AGSGeometry, relation: string): boolean;

	static geometryTouchesGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): boolean;

	static geometryWithinGeometry(geometry1: AGSGeometry, geometry2: AGSGeometry): boolean;

	static intersectionOfGeometry1Geometry2(geometry1: AGSGeometry, geometry2: AGSGeometry): AGSGeometry;

	static intersectionsOfGeometry1Geometry2(geometry1: AGSGeometry, geometry2: AGSGeometry): NSArray<any>;

	static labelPointForPolygon(polygon: AGSPolygon): AGSPoint;

	static lengthOfGeometry(geometry: AGSGeometry): number;

	static nearestCoordinateInGeometryToPoint(geometry: AGSGeometry, point: AGSPoint): AGSProximityResult;

	static nearestVertexInGeometryToPoint(geometry: AGSGeometry, point: AGSPoint): AGSProximityResult;

	static new(): AGSGeometryEngine; // inherited from NSObject

	static normalizeCentralMeridianOfGeometry(geometry: AGSGeometry): AGSGeometry;

	static offsetGeometryDistanceOffsetTypeBevelRatioFlattenError(geometry: AGSGeometry, distance: number, offsetType: AGSGeometryOffsetType, bevelRatio: number, flattenError: number): AGSGeometry;

	static pointAlongPolylineDistance(polyline: AGSPolyline, distance: number): AGSPoint;

	static projectGeometryToSpatialReference(geometry: AGSGeometry, spatialReference: AGSSpatialReference): AGSGeometry;

	static projectGeometryToSpatialReferenceDatumTransformation(geometry: AGSGeometry, toSpatialReference: AGSSpatialReference, datumTransformation: AGSDatumTransformation): AGSGeometry;

	static reshapeGeometryWithPolyline(geometry: AGSMultipart, reshaper: AGSPolyline): AGSMultipart;

	static simplifyGeometry(geometry: AGSGeometry): AGSGeometry;

	static symmetricDifferenceOfGeometry1Geometry2(geometry1: AGSGeometry, geometry2: AGSGeometry): AGSGeometry;

	static unionGeometries(geometries: NSArray<AGSGeometry> | AGSGeometry[]): AGSGeometry;

	static unionOfGeometry1Geometry2(geometry1: AGSGeometry, geometry2: AGSGeometry): AGSGeometry;
}

declare const enum AGSGeometryExtendOption {

	Default = 0,

	RelocateEnds = 1,

	KeepEndAttributes = 2,

	NoEndAttributes = 4,

	DoNotExtendFromStartPoint = 8,

	DoNotExtendFromEndPoint = 16
}

declare const enum AGSGeometryOffsetType {

	Mitered = 0,

	Bevelled = 1,

	Rounded = 2,

	Squared = 3
}

declare const enum AGSGeometryType {

	Unknown = -1,

	Point = 1,

	Envelope = 2,

	Polyline = 3,

	Polygon = 4,

	Multipoint = 5
}

declare class AGSGeoprocessingBoolean extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingBoolean; // inherited from NSObject

	static geoprocessingBoolean(): AGSGeoprocessingBoolean;

	static geoprocessingBooleanWithValue(value: boolean): AGSGeoprocessingBoolean;

	static geoprocessingParameter(): AGSGeoprocessingBoolean; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingBoolean; // inherited from NSObject

	value: boolean;

	constructor(o: { value: boolean; });

	initWithValue(value: boolean): this;
}

declare class AGSGeoprocessingDataFile extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingDataFile; // inherited from NSObject

	static geoprocessingDataFile(): AGSGeoprocessingDataFile;

	static geoprocessingDataFileWithInputFileURL(inputFileURL: NSURL): AGSGeoprocessingDataFile;

	static geoprocessingDataFileWithURL(URL: NSURL): AGSGeoprocessingDataFile;

	static geoprocessingDataFileWithUploadID(uploadID: string): AGSGeoprocessingDataFile;

	static geoprocessingParameter(): AGSGeoprocessingDataFile; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingDataFile; // inherited from NSObject

	URL: NSURL;

	inputFileURL: NSURL;

	uploadID: string;

	constructor(o: { inputFileURL: NSURL; });

	constructor(o: { URL: NSURL; });

	constructor(o: { uploadID: string; });

	downloadToFileURLCompletion(fileURL: NSURL, completion: (p1: NSURL, p2: NSError) => void): AGSCancelable;

	initWithInputFileURL(inputFileURL: NSURL): this;

	initWithURL(URL: NSURL): this;

	initWithUploadID(uploadID: string): this;
}

declare class AGSGeoprocessingDate extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingDate; // inherited from NSObject

	static geoprocessingDate(): AGSGeoprocessingDate;

	static geoprocessingDateWithValue(value: Date): AGSGeoprocessingDate;

	static geoprocessingParameter(): AGSGeoprocessingDate; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingDate; // inherited from NSObject

	value: Date;

	constructor(o: { value: Date; });

	initWithValue(value: Date): this;
}

declare class AGSGeoprocessingDouble extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingDouble; // inherited from NSObject

	static geoprocessingDouble(): AGSGeoprocessingDouble;

	static geoprocessingDoubleWithValue(value: number): AGSGeoprocessingDouble;

	static geoprocessingParameter(): AGSGeoprocessingDouble; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingDouble; // inherited from NSObject

	value: number;

	constructor(o: { value: number; });

	initWithValue(value: number): this;
}

declare const enum AGSGeoprocessingExecutionType {

	AsynchronousSubmit = 0,

	SynchronousExecute = 1,

	Unknown = -1
}

declare class AGSGeoprocessingFeatureSet extends AGSObject implements AGSFeatureSet {

	static alloc(): AGSGeoprocessingFeatureSet; // inherited from NSObject

	static new(): AGSGeoprocessingFeatureSet; // inherited from NSObject

	readonly transferLimitExceeded: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fields: NSArray<AGSField>; // inherited from AGSFeatureSet

	readonly geometryType: AGSGeometryType; // inherited from AGSFeatureSet

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly spatialReference: AGSSpatialReference; // inherited from AGSFeatureSet

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	featureEnumerator(): AGSFeatureEnumerator;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSGeoprocessingFeatures extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingFeatures; // inherited from NSObject

	static geoprocessingFeatures(): AGSGeoprocessingFeatures;

	static geoprocessingFeaturesWithFeatureSet(featureSet: AGSFeatureSet): AGSGeoprocessingFeatures;

	static geoprocessingFeaturesWithURL(URL: NSURL): AGSGeoprocessingFeatures;

	static geoprocessingParameter(): AGSGeoprocessingFeatures; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingFeatures; // inherited from NSObject

	URL: NSURL;

	readonly canFetchOutputFeatures: boolean;

	features: AGSFeatureSet;

	constructor(o: { featureSet: AGSFeatureSet; });

	constructor(o: { URL: NSURL; });

	fetchOutputFeaturesWithCompletion(completion: (p1: AGSFeatureSet, p2: NSError) => void): AGSCancelable;

	initWithFeatureSet(featureSet: AGSFeatureSet): this;

	initWithURL(URL: NSURL): this;
}

declare class AGSGeoprocessingJob extends AGSJob {

	static alloc(): AGSGeoprocessingJob; // inherited from NSObject

	static new(): AGSGeoprocessingJob; // inherited from NSObject

	readonly parameters: AGSGeoprocessingParameters;

	readonly result: AGSGeoprocessingResult;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: AGSGeoprocessingResult, p2: NSError) => void): void;
}

declare class AGSGeoprocessingLinearUnit extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingLinearUnit; // inherited from NSObject

	static geoprocessingLinearUnit(): AGSGeoprocessingLinearUnit;

	static geoprocessingLinearUnitWithDistance(distance: number): AGSGeoprocessingLinearUnit;

	static geoprocessingLinearUnitWithDistanceGeoprocessingUnit(distance: number, geoprocessingUnit: AGSGeoprocessingLinearUnits): AGSGeoprocessingLinearUnit;

	static geoprocessingLinearUnitWithDistanceLinearUnit(distance: number, linearUnit: AGSLinearUnit): AGSGeoprocessingLinearUnit;

	static geoprocessingLinearUnitWithDistanceUnitID(distance: number, unitID: AGSLinearUnitID): AGSGeoprocessingLinearUnit;

	static geoprocessingParameter(): AGSGeoprocessingLinearUnit; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingLinearUnit; // inherited from NSObject

	distance: number;

	geoprocessingLinearUnit: AGSGeoprocessingLinearUnits;

	constructor(o: { distance: number; });

	constructor(o: { distance: number; geoprocessingLinearUnit: AGSGeoprocessingLinearUnits; });

	constructor(o: { distance: number; linearUnit: AGSLinearUnit; });

	constructor(o: { distance: number; unitID: AGSLinearUnitID; });

	initWithDistance(distance: number): this;

	initWithDistanceGeoprocessingLinearUnit(distance: number, geoprocessingLinearUnit: AGSGeoprocessingLinearUnits): this;

	initWithDistanceLinearUnit(distance: number, linearUnit: AGSLinearUnit): this;

	initWithDistanceUnitID(distance: number, unitID: AGSLinearUnitID): this;

	linearUnit(): AGSLinearUnit;
}

declare const enum AGSGeoprocessingLinearUnits {

	Centimeter = 0,

	Decimeter = 1,

	Kilometer = 2,

	Meter = 3,

	Millimeter = 4,

	Point = 5,

	USNauticalMile = 6,

	USSurveyFoot = 7,

	USSurveyInch = 8,

	USSurveyMile = 9,

	USSurveyYard = 10,

	Unknown = -1
}

declare class AGSGeoprocessingLong extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingLong; // inherited from NSObject

	static geoprocessingLong(): AGSGeoprocessingLong;

	static geoprocessingLongWithValue(value: number): AGSGeoprocessingLong;

	static geoprocessingParameter(): AGSGeoprocessingLong; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingLong; // inherited from NSObject

	value: number;

	constructor(o: { value: number; });

	initWithValue(value: number): this;
}

declare class AGSGeoprocessingMultiValue extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingMultiValue; // inherited from NSObject

	static geoprocessingMultiValueWithParameterType(parameterType: AGSGeoprocessingParameterType): AGSGeoprocessingMultiValue;

	static geoprocessingMultiValueWithParameterTypeValues(parameterType: AGSGeoprocessingParameterType, values: NSArray<AGSGeoprocessingParameter> | AGSGeoprocessingParameter[]): AGSGeoprocessingMultiValue;

	static geoprocessingParameter(): AGSGeoprocessingMultiValue; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingMultiValue; // inherited from NSObject

	readonly valueParameterType: AGSGeoprocessingParameterType;

	values: NSArray<AGSGeoprocessingParameter>;

	constructor(o: { parameterType: AGSGeoprocessingParameterType; });

	constructor(o: { parameterType: AGSGeoprocessingParameterType; values: NSArray<AGSGeoprocessingParameter> | AGSGeoprocessingParameter[]; });

	initWithParameterType(parameterType: AGSGeoprocessingParameterType): this;

	initWithParameterTypeValues(parameterType: AGSGeoprocessingParameterType, values: NSArray<AGSGeoprocessingParameter> | AGSGeoprocessingParameter[]): this;
}

declare class AGSGeoprocessingParameter extends AGSObject {

	static alloc(): AGSGeoprocessingParameter; // inherited from NSObject

	static geoprocessingParameter(): AGSGeoprocessingParameter;

	static new(): AGSGeoprocessingParameter; // inherited from NSObject

	readonly type: AGSGeoprocessingParameterType;
}

declare const enum AGSGeoprocessingParameterDirection {

	Input = 0,

	Output = 1
}

declare class AGSGeoprocessingParameterInfo extends AGSObject {

	static alloc(): AGSGeoprocessingParameterInfo; // inherited from NSObject

	static new(): AGSGeoprocessingParameterInfo; // inherited from NSObject

	readonly category: string;

	readonly choiceList: NSArray<string>;

	readonly dataType: AGSGeoprocessingParameterType;

	readonly defaultParameter: AGSGeoprocessingParameter;

	readonly direction: AGSGeoprocessingParameterDirection;

	readonly displayName: string;

	readonly featuresRequireGeometry: boolean;

	readonly multiValueDataType: AGSGeoprocessingParameterType;

	readonly name: string;

	readonly parameterDescription: string;

	readonly required: boolean;
}

declare const enum AGSGeoprocessingParameterType {

	Boolean = 0,

	DataFile = 1,

	Date = 2,

	Double = 3,

	Features = 4,

	LinearUnit = 5,

	Long = 6,

	MultiValue = 7,

	Raster = 8,

	String = 9,

	Unknown = 10
}

declare class AGSGeoprocessingParameters extends AGSObject {

	static alloc(): AGSGeoprocessingParameters; // inherited from NSObject

	static geoprocessingParametersWithExecutionType(executionType: AGSGeoprocessingExecutionType): AGSGeoprocessingParameters;

	static new(): AGSGeoprocessingParameters; // inherited from NSObject

	readonly executionType: AGSGeoprocessingExecutionType;

	inputs: NSDictionary<string, AGSGeoprocessingParameter>;

	outputSpatialReference: AGSSpatialReference;

	processSpatialReference: AGSSpatialReference;

	returnM: boolean;

	returnZ: boolean;

	constructor(o: { executionType: AGSGeoprocessingExecutionType; });

	initWithExecutionType(executionType: AGSGeoprocessingExecutionType): this;
}

declare class AGSGeoprocessingRaster extends AGSGeoprocessingDataFile {

	static alloc(): AGSGeoprocessingRaster; // inherited from NSObject

	static geoprocessingDataFile(): AGSGeoprocessingRaster; // inherited from AGSGeoprocessingDataFile

	static geoprocessingDataFileWithInputFileURL(inputFileURL: NSURL): AGSGeoprocessingRaster; // inherited from AGSGeoprocessingDataFile

	static geoprocessingDataFileWithURL(URL: NSURL): AGSGeoprocessingRaster; // inherited from AGSGeoprocessingDataFile

	static geoprocessingDataFileWithUploadID(uploadID: string): AGSGeoprocessingRaster; // inherited from AGSGeoprocessingDataFile

	static geoprocessingParameter(): AGSGeoprocessingRaster; // inherited from AGSGeoprocessingParameter

	static geoprocessingRaster(): AGSGeoprocessingRaster;

	static geoprocessingRasterWithInputFileURL(inputFileURL: NSURL): AGSGeoprocessingRaster;

	static geoprocessingRasterWithURL(URL: NSURL): AGSGeoprocessingRaster;

	static geoprocessingRasterWithURLFormat(URL: NSURL, format: string): AGSGeoprocessingRaster;

	static geoprocessingRasterWithUploadID(uploadID: string): AGSGeoprocessingRaster;

	static new(): AGSGeoprocessingRaster; // inherited from NSObject

	format: string;

	constructor(o: { URL: NSURL; format: string; });

	initWithURLFormat(URL: NSURL, format: string): this;
}

declare class AGSGeoprocessingResult extends AGSObject {

	static alloc(): AGSGeoprocessingResult; // inherited from NSObject

	static new(): AGSGeoprocessingResult; // inherited from NSObject

	readonly mapImageLayer: AGSArcGISMapImageLayer;

	readonly outputs: NSDictionary<string, AGSGeoprocessingParameter>;
}

declare class AGSGeoprocessingString extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingString; // inherited from NSObject

	static geoprocessingParameter(): AGSGeoprocessingString; // inherited from AGSGeoprocessingParameter

	static geoprocessingString(): AGSGeoprocessingString;

	static geoprocessingStringWithValue(value: string): AGSGeoprocessingString;

	static new(): AGSGeoprocessingString; // inherited from NSObject

	value: string;

	constructor(o: { value: string; });

	initWithValue(value: string): this;
}

declare class AGSGeoprocessingTask extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSGeoprocessingTask; // inherited from NSObject

	static geoprocessingTaskWithURL(URL: NSURL): AGSGeoprocessingTask;

	static new(): AGSGeoprocessingTask; // inherited from NSObject

	readonly geoprocessingTaskInfo: AGSGeoprocessingTaskInfo;

	constructor(o: { URL: NSURL; });

	defaultGeoprocessingParametersWithCompletion(completion: (p1: AGSGeoprocessingParameters, p2: NSError) => void): AGSCancelable;

	geoprocessingJobWithParameters(parameters: AGSGeoprocessingParameters): AGSGeoprocessingJob;

	initWithURL(URL: NSURL): this;
}

declare class AGSGeoprocessingTaskInfo extends AGSObject {

	static alloc(): AGSGeoprocessingTaskInfo; // inherited from NSObject

	static new(): AGSGeoprocessingTaskInfo; // inherited from NSObject

	readonly URL: NSURL;

	readonly category: string;

	readonly displayName: string;

	readonly executionType: AGSGeoprocessingExecutionType;

	readonly helpURL: NSURL;

	readonly name: string;

	readonly parameterInfos: NSArray<AGSGeoprocessingParameterInfo>;

	readonly serviceDescription: string;
}

declare class AGSGeoprocessingUnknownParameter extends AGSGeoprocessingParameter {

	static alloc(): AGSGeoprocessingUnknownParameter; // inherited from NSObject

	static geoprocessingParameter(): AGSGeoprocessingUnknownParameter; // inherited from AGSGeoprocessingParameter

	static new(): AGSGeoprocessingUnknownParameter; // inherited from NSObject
}

declare class AGSGlobeCameraController extends AGSCameraController {

	static alloc(): AGSGlobeCameraController; // inherited from NSObject

	static globeCameraController(): AGSGlobeCameraController;

	static new(): AGSGlobeCameraController; // inherited from NSObject
}

declare class AGSGraphic extends AGSObject implements AGSGeoElement {

	static alloc(): AGSGraphic; // inherited from NSObject

	static graphic(): AGSGraphic;

	static graphicWithGeometrySymbolAttributes(geometry: AGSGeometry, symbol: AGSSymbol, attributes: NSDictionary<string, any>): AGSGraphic;

	static new(): AGSGraphic; // inherited from NSObject

	readonly graphicsOverlay: AGSGraphicsOverlay;

	selected: boolean;

	symbol: AGSSymbol;

	visible: boolean;

	zIndex: number;

	readonly attributes: NSMutableDictionary<string, any>; // inherited from AGSGeoElement

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	geometry: AGSGeometry; // inherited from AGSGeoElement

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { geometry: AGSGeometry; symbol: AGSSymbol; attributes: NSDictionary<string, any>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithGeometrySymbolAttributes(geometry: AGSGeometry, symbol: AGSSymbol, attributes: NSDictionary<string, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSGraphicsOverlay extends AGSObject implements AGSPopupSource {

	static alloc(): AGSGraphicsOverlay; // inherited from NSObject

	static graphicsOverlay(): AGSGraphicsOverlay;

	static new(): AGSGraphicsOverlay; // inherited from NSObject

	readonly extent: AGSEnvelope;

	readonly graphics: NSMutableArray<AGSGraphic>;

	readonly labelDefinitions: NSMutableArray<AGSLabelDefinition>;

	labelsEnabled: boolean;

	maxScale: number;

	minScale: number;

	opacity: number;

	overlayID: string;

	renderer: AGSRenderer;

	renderingMode: AGSGraphicsRenderingMode;

	scaleSymbols: boolean;

	sceneProperties: AGSLayerSceneProperties;

	selectionColor: UIColor;

	visible: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	popupDefinition: AGSPopupDefinition; // inherited from AGSPopupSource

	popupEnabled: boolean; // inherited from AGSPopupSource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clearSelection(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectGraphics(graphics: NSArray<AGSGraphic> | AGSGraphic[]): void;

	selectedGraphics(): NSArray<AGSGraphic>;

	self(): this;

	unselectGraphics(graphics: NSArray<AGSGraphic> | AGSGraphic[]): void;
}

declare const enum AGSGraphicsRenderingMode {

	Dynamic = 0,

	Static = 1
}

declare class AGSGrid extends AGSObject {

	static alloc(): AGSGrid; // inherited from NSObject

	static new(): AGSGrid; // inherited from NSObject

	labelOffset: number;

	labelPosition: AGSGridLabelPosition;

	labelVisibility: boolean;

	readonly levelCount: number;

	visible: boolean;

	lineSymbolForLevel(level: number): AGSSymbol;

	setLineSymbolForLevel(symbol: AGSSymbol, level: number): void;

	setTextSymbolForLevel(symbol: AGSSymbol, level: number): void;

	textSymbolForLevel(level: number): AGSSymbol;
}

declare const enum AGSGridLabelPosition {

	Geographic = 0,

	BottomLeft = 1,

	BottomRight = 2,

	TopLeft = 3,

	TopRight = 4,

	Center = 5,

	AllSides = 6
}

declare const enum AGSGridType {

	LatitudeLongitudeGrid = 0,

	UTM = 1,

	MGRS = 2,

	USNG = 3,

	Unknown = -1
}

declare class AGSGroupLayer extends AGSLayer {

	static alloc(): AGSGroupLayer; // inherited from NSObject

	static groupLayer(): AGSGroupLayer;

	static groupLayerWithChildLayers(childLayers: NSArray<AGSLayer> | AGSLayer[]): AGSGroupLayer;

	static new(): AGSGroupLayer; // inherited from NSObject

	readonly layers: NSMutableArray<AGSLayer>;

	showChildrenInLegend: boolean;

	constructor(o: { childLayers: NSArray<AGSLayer> | AGSLayer[]; });

	initWithChildLayers(childLayers: NSArray<AGSLayer> | AGSLayer[]): this;
}

declare class AGSHatchFillSymbolLayer extends AGSFillSymbolLayer {

	static alloc(): AGSHatchFillSymbolLayer; // inherited from NSObject

	static hatchFillSymbolLayer(): AGSHatchFillSymbolLayer;

	static hatchFillSymbolLayerWithMultilayerPolylineSymbolAngle(multilayerPolylineSymbol: AGSMultilayerPolylineSymbol, angle: number): AGSHatchFillSymbolLayer;

	static new(): AGSHatchFillSymbolLayer; // inherited from NSObject

	angle: number;

	polyline: AGSMultilayerPolylineSymbol;

	separation: number;

	constructor(o: { multilayerPolylineSymbol: AGSMultilayerPolylineSymbol; angle: number; });

	initWithMultilayerPolylineSymbolAngle(multilayerPolylineSymbol: AGSMultilayerPolylineSymbol, angle: number): this;
}

declare class AGSHeatmapRenderer extends AGSRenderer {

	static alloc(): AGSHeatmapRenderer; // inherited from NSObject

	static new(): AGSHeatmapRenderer; // inherited from NSObject
}

declare class AGSHillshadeRenderer extends AGSRasterRenderer {

	static alloc(): AGSHillshadeRenderer; // inherited from NSObject

	static hillshadeRendererWithAltitudeAzimuthZFactorSlopeTypePixelSizeFactorPixelSizePowerOutputBitDepth(altitude: number, azimuth: number, zFactor: number, slopeType: AGSSlopeType, pixelSizeFactor: number, pixelSizePower: number, outputBitDepth: number): AGSHillshadeRenderer;

	static new(): AGSHillshadeRenderer; // inherited from NSObject

	static rasterRenderer(): AGSHillshadeRenderer; // inherited from AGSRasterRenderer

	readonly altitude: number;

	readonly azimuth: number;

	readonly outputBitDepth: number;

	readonly pixelSizeFactor: number;

	readonly pixelSizePower: number;

	readonly slopeType: AGSSlopeType;

	readonly zFactor: number;

	constructor(o: { altitude: number; azimuth: number; zFactor: number; slopeType: AGSSlopeType; pixelSizeFactor: number; pixelSizePower: number; outputBitDepth: number; });

	initWithAltitudeAzimuthZFactorSlopeTypePixelSizeFactorPixelSizePowerOutputBitDepth(altitude: number, azimuth: number, zFactor: number, slopeType: AGSSlopeType, pixelSizeFactor: number, pixelSizePower: number, outputBitDepth: number): this;
}

declare class AGSHistogramEqualizationStretchParameters extends AGSStretchParameters {

	static alloc(): AGSHistogramEqualizationStretchParameters; // inherited from NSObject

	static histogramEqualizationStretchParameters(): AGSHistogramEqualizationStretchParameters;

	static new(): AGSHistogramEqualizationStretchParameters; // inherited from NSObject
}

declare const enum AGSHorizontalAlignment {

	Center = 0,

	Justify = 1,

	Left = 2,

	Right = 3
}

declare class AGSIDInfo extends AGSObject {

	static alloc(): AGSIDInfo; // inherited from NSObject

	static new(): AGSIDInfo; // inherited from NSObject

	readonly ID: number;

	readonly name: string;
}

declare class AGSIdentifyGraphicsOverlayResult extends AGSObject {

	static alloc(): AGSIdentifyGraphicsOverlayResult; // inherited from NSObject

	static new(): AGSIdentifyGraphicsOverlayResult; // inherited from NSObject

	readonly error: NSError;

	readonly graphics: NSArray<AGSGraphic>;

	readonly graphicsOverlay: AGSGraphicsOverlay;

	readonly popups: NSArray<AGSPopup>;
}

declare class AGSIdentifyLayerResult extends AGSObject {

	static alloc(): AGSIdentifyLayerResult; // inherited from NSObject

	static new(): AGSIdentifyLayerResult; // inherited from NSObject

	readonly error: NSError;

	readonly geoElements: NSArray<AGSGeoElement>;

	readonly layerContent: AGSLayerContent;

	readonly popups: NSArray<AGSPopup>;

	readonly sublayerResults: NSArray<AGSIdentifyLayerResult>;

	readonly transferLimitExceeded: boolean;
}

declare class AGSImageAdjustmentLayer extends AGSLayer {

	static alloc(): AGSImageAdjustmentLayer; // inherited from NSObject

	static new(): AGSImageAdjustmentLayer; // inherited from NSObject

	brightness: number;

	contrast: number;

	gamma: number;
}

declare const enum AGSImageScaleMode {

	Fill = 0,

	AspectFit = 1,

	AspectFill = 2
}

declare class AGSImageServiceRaster extends AGSRaster implements AGSRemoteResource {

	static alloc(): AGSImageServiceRaster; // inherited from NSObject

	static imageServiceRasterWithURL(URL: NSURL): AGSImageServiceRaster;

	static new(): AGSImageServiceRaster; // inherited from NSObject

	static rasterWithFileURL(fileURL: NSURL): AGSImageServiceRaster; // inherited from AGSRaster

	static rasterWithNameExtension(name: string, extension: string): AGSImageServiceRaster; // inherited from AGSRaster

	static rasterWithRasterFunction(rasterFunction: AGSRasterFunction): AGSImageServiceRaster; // inherited from AGSRaster

	renderingRule: AGSRenderingRule;

	readonly serviceInfo: AGSArcGISImageServiceInfo;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSImageTiledLayer extends AGSImageAdjustmentLayer {

	static alloc(): AGSImageTiledLayer; // inherited from NSObject

	static imageTiledLayerWithTileInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSImageTiledLayer;

	static new(): AGSImageTiledLayer; // inherited from NSObject

	attribution: string;

	cancelTileRequestHandler: (p1: AGSTileKey) => void;

	noDataTileBehavior: AGSNoDataTileBehavior;

	readonly tileInfo: AGSTileInfo;

	tileRequestHandler: (p1: AGSTileKey) => void;

	constructor(o: { tileInfo: AGSTileInfo; fullExtent: AGSEnvelope; });

	initWithTileInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): this;

	respondWithNoDataTileForTileKey(tileKey: AGSTileKey): void;

	respondWithTileKeyDataError(tileKey: AGSTileKey, data: NSData, error: NSError): void;
}

declare class AGSIncident extends AGSObject implements NSCopying {

	static alloc(): AGSIncident; // inherited from NSObject

	static incidentWithPoint(point: AGSPoint): AGSIncident;

	static new(): AGSIncident; // inherited from NSObject

	curbApproach: AGSCurbApproach;

	currentBearing: number;

	currentBearingTolerance: number;

	readonly distanceToNetworkLocation: number;

	readonly geometry: AGSPoint;

	impedanceCutoff: number;

	incidentID: number;

	readonly locationStatus: AGSLocationStatus;

	name: string;

	navigationLatency: number;

	navigationSpeed: number;

	networkLocation: AGSNetworkLocation;

	targetFacilityCount: number;

	constructor(o: { point: AGSPoint; });

	addedCostForCostAttribute(attributeName: string): number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPoint(point: AGSPoint): this;

	setAddedCostForCostAttribute(addedCost: number, attributeName: string): void;
}

declare class AGSInheritedDomain extends AGSDomain {

	static alloc(): AGSInheritedDomain; // inherited from NSObject

	static new(): AGSInheritedDomain; // inherited from NSObject
}

declare class AGSIntegratedMeshLayer extends AGSLayer implements AGSRemoteResource {

	static alloc(): AGSIntegratedMeshLayer; // inherited from NSObject

	static integratedMeshLayer(): AGSIntegratedMeshLayer;

	static integratedMeshLayerWithItem(item: AGSItem): AGSIntegratedMeshLayer;

	static integratedMeshLayerWithName(name: string): AGSIntegratedMeshLayer;

	static integratedMeshLayerWithURL(URL: NSURL): AGSIntegratedMeshLayer;

	static new(): AGSIntegratedMeshLayer; // inherited from NSObject

	altitudeOffset: number;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { name: string; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItem(item: AGSItem): this;

	initWithName(name: string): this;

	initWithURL(url: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSItem extends AGSObject {

	static alloc(): AGSItem; // inherited from NSObject

	static new(): AGSItem; // inherited from NSObject

	accessInformation: string;

	readonly created: Date;

	extent: AGSEnvelope;

	itemDescription: string;

	readonly itemID: string;

	readonly modified: Date;

	readonly name: string;

	snippet: string;

	spatialReferenceName: string;

	tags: NSArray<string>;

	termsOfUse: string;

	readonly thumbnail: AGSLoadableImage;

	title: string;

	typeKeywords: NSArray<string>;

	fetchDataWithCompletion(completion: (p1: NSData, p2: NSError) => void): AGSCancelable;

	setThumbnailWithImage(image: UIImage): void;

	updateItemPropertiesWithCompletion(completion: (p1: NSError) => void): AGSCancelable;
}

declare class AGSItemResourceCache extends AGSLoadableBase {

	static alloc(): AGSItemResourceCache; // inherited from NSObject

	static itemResourceCacheWithFileURL(fileURL: NSURL): AGSItemResourceCache;

	static new(): AGSItemResourceCache; // inherited from NSObject

	readonly fileURL: NSURL;

	readonly item: AGSLocalItem;

	constructor(o: { fileURL: NSURL; });

	initWithFileURL(fileURL: NSURL): this;
}

declare class AGSJSONRequestOperation extends AGSRequestOperation {

	static alloc(): AGSJSONRequestOperation; // inherited from NSObject

	static new(): AGSJSONRequestOperation; // inherited from NSObject
}

interface AGSJSONSerializable extends NSObjectProtocol {

	unknownJSON: NSDictionary<string, any>;

	unsupportedJSON: NSDictionary<string, any>;

	toJSON(): any;
}
declare var AGSJSONSerializable: {

	prototype: AGSJSONSerializable;

	fromJSONError(JSONObject: any): AGSJSONSerializable;
};

declare class AGSJSONSerializableBase extends NSObject implements AGSJSONSerializable {

	static alloc(): AGSJSONSerializableBase; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSJSONSerializableBase; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare class AGSJob extends AGSObject implements AGSJSONSerializable, AGSRemoteResource, NSProgressReporting {

	static alloc(): AGSJob; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSJob; // inherited from NSObject

	readonly error: NSError;

	readonly jobType: AGSJobType;

	readonly messages: NSArray<AGSJobMessage>;

	readonly result: any;

	readonly serverJobID: string;

	readonly status: AGSJobStatus;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly progress: NSProgress; // inherited from NSProgressReporting

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	cancel(): boolean;

	checkStatusWithCompletion(completion: (p1: NSError) => void): AGSCancelable;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pause(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: any, p2: NSError) => void): void;

	toJSON(): any;
}

declare class AGSJobMessage extends AGSObject {

	static alloc(): AGSJobMessage; // inherited from NSObject

	static new(): AGSJobMessage; // inherited from NSObject

	readonly message: string;

	readonly severity: AGSJobMessageSeverity;

	readonly source: AGSJobMessageSource;

	readonly timestamp: Date;
}

declare const enum AGSJobMessageSeverity {

	Unknown = -1,

	Info = 0,

	Warning = 1,

	Error = 2
}

declare const enum AGSJobMessageSource {

	Client = 0,

	Service = 1
}

declare const enum AGSJobStatus {

	NotStarted = 0,

	Started = 1,

	Paused = 2,

	Succeeded = 3,

	Failed = 4
}

declare const enum AGSJobType {

	GenerateGeodatabase = 0,

	SyncGeodatabase = 1,

	ExportTileCache = 2,

	EstimateTileCacheSize = 3,

	GeoprocessingJob = 4,

	GenerateOfflineMap = 5,

	OfflineMapSync = 7
}

declare const enum AGSJoinType {

	InnerJoin = 0,

	LeftOuterJoin = 1,

	Unknown = -1
}

declare const enum AGSKMLAltitudeMode {

	ClampToGround = 0,

	RelativeToGround = 1,

	Absolute = 2,

	Unknown = -1
}

declare const enum AGSKMLColorMode {

	Normal = 0,

	Random = 1
}

declare class AGSKMLColorStyle extends AGSObject {

	static alloc(): AGSKMLColorStyle; // inherited from NSObject

	static new(): AGSKMLColorStyle; // inherited from NSObject

	color: UIColor;

	colorMode: AGSKMLColorMode;
}

declare class AGSKMLContainer extends AGSKMLNode {

	static KMLContainer(): AGSKMLContainer;

	static KMLNode(): AGSKMLContainer; // inherited from AGSKMLNode

	static alloc(): AGSKMLContainer; // inherited from NSObject

	static new(): AGSKMLContainer; // inherited from NSObject

	readonly childNodes: NSArray<AGSKMLNode>;

	listItemType: AGSKMLListItemType;

	open: boolean;

	readonly partiallyVisible: boolean;

	addChildNode(node: AGSKMLNode): void;

	insertChildNodeAtIndex(node: AGSKMLNode, index: number): void;

	removeAllChildNodes(): void;

	removeChildNodeAtIndex(index: number): void;
}

declare class AGSKMLDataset extends AGSLoadableBase implements AGSRemoteResource {

	static KMLDatasetWithName(name: string): AGSKMLDataset;

	static KMLDatasetWithRootNode(rootNode: AGSKMLNode): AGSKMLDataset;

	static KMLDatasetWithURL(URL: NSURL): AGSKMLDataset;

	static alloc(): AGSKMLDataset; // inherited from NSObject

	static new(): AGSKMLDataset; // inherited from NSObject

	networkLinkMessageHandler: (p1: AGSKMLNetworkLink, p2: string) => void;

	nodeBalloonVisibilityChangedHandler: (p1: AGSKMLNode, p2: boolean) => void;

	nodeRefreshStatusChangedHandler: (p1: AGSKMLNode, p2: AGSKMLRefreshStatus) => void;

	readonly rootNodes: NSArray<AGSKMLNode>;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; });

	constructor(o: { rootNode: AGSKMLNode; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithName(name: string): this;

	initWithRootNode(rootNode: AGSKMLNode): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSKMLDocument extends AGSKMLContainer {

	static KMLContainer(): AGSKMLDocument; // inherited from AGSKMLContainer

	static KMLDocument(): AGSKMLDocument;

	static KMLNode(): AGSKMLDocument; // inherited from AGSKMLNode

	static alloc(): AGSKMLDocument; // inherited from NSObject

	static new(): AGSKMLDocument; // inherited from NSObject
}

declare class AGSKMLFolder extends AGSKMLContainer {

	static KMLContainer(): AGSKMLFolder; // inherited from AGSKMLContainer

	static KMLFolder(): AGSKMLFolder;

	static KMLNode(): AGSKMLFolder; // inherited from AGSKMLNode

	static alloc(): AGSKMLFolder; // inherited from NSObject

	static new(): AGSKMLFolder; // inherited from NSObject
}

declare class AGSKMLGeometry extends AGSObject {

	static KMLGeometryWithGeometryAltitudeMode(geometry: AGSGeometry, altitudeMode: AGSKMLAltitudeMode): AGSKMLGeometry;

	static KMLGeometryWithGeometryAltitudeModeExtruded(geometry: AGSGeometry, altitudeMode: AGSKMLAltitudeMode, extruded: boolean): AGSKMLGeometry;

	static KMLGeometryWithGeometryAltitudeModeExtrudedTessellated(geometry: AGSGeometry, altitudeMode: AGSKMLAltitudeMode, extruded: boolean, tessellated: boolean): AGSKMLGeometry;

	static alloc(): AGSKMLGeometry; // inherited from NSObject

	static new(): AGSKMLGeometry; // inherited from NSObject

	readonly altitudeMode: AGSKMLAltitudeMode;

	readonly extruded: boolean;

	readonly geometry: AGSGeometry;

	readonly tessellated: boolean;

	readonly type: AGSKMLGeometryType;

	constructor(o: { geometry: AGSGeometry; altitudeMode: AGSKMLAltitudeMode; });

	constructor(o: { geometry: AGSGeometry; altitudeMode: AGSKMLAltitudeMode; extruded: boolean; });

	constructor(o: { geometry: AGSGeometry; altitudeMode: AGSKMLAltitudeMode; extruded: boolean; tessellated: boolean; });

	initWithGeometryAltitudeMode(geometry: AGSGeometry, altitudeMode: AGSKMLAltitudeMode): this;

	initWithGeometryAltitudeModeExtruded(geometry: AGSGeometry, altitudeMode: AGSKMLAltitudeMode, extruded: boolean): this;

	initWithGeometryAltitudeModeExtrudedTessellated(geometry: AGSGeometry, altitudeMode: AGSKMLAltitudeMode, extruded: boolean, tessellated: boolean): this;
}

declare const enum AGSKMLGeometryType {

	Point = 0,

	Polyline = 1,

	Polygon = 2,

	Model = 3,

	Unknown = -1
}

declare const enum AGSKMLGraphicType {

	None = 0,

	Point = 1,

	Polyline = 2,

	Polygon = 3,

	ExtrudedPoint = 4,

	ExtrudedPolyline = 5,

	ExtrudedPolygon = 6,

	Model = 7,

	MultiGeometry = 8,

	Unknown = -1
}

declare class AGSKMLGroundOverlay extends AGSKMLNode {

	static KMLGroundOverlayWithGeometryIcon(geometry: AGSGeometry, icon: AGSKMLIcon): AGSKMLGroundOverlay;

	static KMLNode(): AGSKMLGroundOverlay; // inherited from AGSKMLNode

	static alloc(): AGSKMLGroundOverlay; // inherited from NSObject

	static new(): AGSKMLGroundOverlay; // inherited from NSObject

	altitude: number;

	altitudeMode: AGSKMLAltitudeMode;

	color: UIColor;

	drawOrder: number;

	geometry: AGSGeometry;

	icon: AGSKMLIcon;

	rotation: number;

	constructor(o: { geometry: AGSGeometry; icon: AGSKMLIcon; });

	initWithGeometryIcon(geometry: AGSGeometry, icon: AGSKMLIcon): this;
}

declare class AGSKMLIcon extends AGSObject {

	static KMLIconWithURL(URL: NSURL): AGSKMLIcon;

	static alloc(): AGSKMLIcon; // inherited from NSObject

	static new(): AGSKMLIcon; // inherited from NSObject

	readonly URL: NSURL;

	refreshInterval: number;

	refreshMode: AGSKMLRefreshMode;

	viewRefreshMode: AGSKMLViewRefreshMode;

	viewRefreshTime: number;

	constructor(o: { URL: NSURL; });

	initWithURL(URL: NSURL): this;
}

declare class AGSKMLIconStyle extends AGSKMLColorStyle {

	static KMLIconStyleWithIconScale(icon: AGSKMLIcon, scale: number): AGSKMLIconStyle;

	static alloc(): AGSKMLIconStyle; // inherited from NSObject

	static new(): AGSKMLIconStyle; // inherited from NSObject

	heading: number;

	hotSpot: AGSKMLImageCoordinate;

	icon: AGSKMLIcon;

	scale: number;

	constructor(o: { icon: AGSKMLIcon; scale: number; });

	initWithIconScale(icon: AGSKMLIcon, scale: number): this;
}

declare class AGSKMLImageCoordinate extends AGSObject {

	static KMLImageCoordinateWithXYXUnitsYUnits(x: number, y: number, xUnits: AGSKMLUnitsType, yUnits: AGSKMLUnitsType): AGSKMLImageCoordinate;

	static alloc(): AGSKMLImageCoordinate; // inherited from NSObject

	static new(): AGSKMLImageCoordinate; // inherited from NSObject

	readonly x: number;

	readonly xUnits: AGSKMLUnitsType;

	readonly y: number;

	readonly yUnits: AGSKMLUnitsType;

	constructor(o: { x: number; y: number; xUnits: AGSKMLUnitsType; yUnits: AGSKMLUnitsType; });

	initWithXYXUnitsYUnits(x: number, y: number, xUnits: AGSKMLUnitsType, yUnits: AGSKMLUnitsType): this;
}

declare class AGSKMLLabelStyle extends AGSKMLColorStyle {

	static KMLLabelStyleWithColorScale(color: UIColor, scale: number): AGSKMLLabelStyle;

	static alloc(): AGSKMLLabelStyle; // inherited from NSObject

	static new(): AGSKMLLabelStyle; // inherited from NSObject

	scale: number;

	constructor(o: { color: UIColor; scale: number; });

	initWithColorScale(color: UIColor, scale: number): this;
}

declare class AGSKMLLayer extends AGSLayer implements AGSTimeAware {

	static KMLLayerWithItem(item: AGSItem): AGSKMLLayer;

	static KMLLayerWithKMLDataset(dataset: AGSKMLDataset): AGSKMLLayer;

	static alloc(): AGSKMLLayer; // inherited from NSObject

	static new(): AGSKMLLayer; // inherited from NSObject

	readonly dataset: AGSKMLDataset;

	readonly fullTimeExtent: AGSTimeExtent; // inherited from AGSTimeAware

	readonly supportsTimeFiltering: boolean; // inherited from AGSTimeAware

	timeFilteringEnabled: boolean; // inherited from AGSTimeAware

	readonly timeInterval: AGSTimeValue; // inherited from AGSTimeAware

	timeOffset: AGSTimeValue; // inherited from AGSTimeAware

	constructor(o: { item: AGSItem; });

	constructor(o: { KMLDataset: AGSKMLDataset; });

	initWithItem(item: AGSItem): this;

	initWithKMLDataset(dataset: AGSKMLDataset): this;
}

declare class AGSKMLLineStyle extends AGSKMLColorStyle {

	static KMLLineStyleWithColorWidth(color: UIColor, width: number): AGSKMLLineStyle;

	static alloc(): AGSKMLLineStyle; // inherited from NSObject

	static new(): AGSKMLLineStyle; // inherited from NSObject

	width: number;

	constructor(o: { color: UIColor; width: number; });

	initWithColorWidth(color: UIColor, width: number): this;
}

declare const enum AGSKMLListItemType {

	Check = 0,

	RadioFolder = 1,

	CheckHideChildren = 2,

	Unknown = -1
}

declare class AGSKMLNetworkLink extends AGSKMLNode {

	static KMLNetworkLinkWithURL(URL: NSURL): AGSKMLNetworkLink;

	static KMLNode(): AGSKMLNetworkLink; // inherited from AGSKMLNode

	static alloc(): AGSKMLNetworkLink; // inherited from NSObject

	static new(): AGSKMLNetworkLink; // inherited from NSObject

	URL: NSURL;

	canFlyToNode: boolean;

	readonly childNodes: NSArray<AGSKMLNode>;

	hasRefreshVisibility: boolean;

	listItemType: AGSKMLListItemType;

	open: boolean;

	readonly partiallyVisible: boolean;

	refreshInterval: number;

	refreshMode: AGSKMLRefreshMode;

	viewRefreshMode: AGSKMLViewRefreshMode;

	viewRefreshTime: number;

	constructor(o: { URL: NSURL; });

	initWithURL(URL: NSURL): this;

	refresh(): void;
}

declare class AGSKMLNode extends AGSObject {

	static KMLNode(): AGSKMLNode;

	static alloc(): AGSKMLNode; // inherited from NSObject

	static new(): AGSKMLNode; // inherited from NSObject

	readonly UXIcon: UIImage;

	readonly UXIconColor: UIColor;

	readonly UXIconID: number;

	address: string;

	readonly balloonBackgroundColor: UIColor;

	readonly balloonContent: string;

	readonly extent: AGSEnvelope;

	highlightStyle: AGSKMLStyle;

	highlighted: boolean;

	name: string;

	nodeDescription: string;

	nodeID: string;

	readonly parentNode: AGSKMLNode;

	readonly refreshError: NSError;

	readonly refreshStatus: AGSKMLRefreshStatus;

	snippet: string;

	snippetMaxLines: number;

	style: AGSKMLStyle;

	viewpoint: AGSKMLViewpoint;

	visible: boolean;

	saveToFileURLCompletion(fileURL: NSURL, completion: (p1: NSError) => void): AGSCancelable;
}

declare class AGSKMLPhotoOverlay extends AGSKMLNode {

	static KMLNode(): AGSKMLPhotoOverlay; // inherited from AGSKMLNode

	static alloc(): AGSKMLPhotoOverlay; // inherited from NSObject

	static new(): AGSKMLPhotoOverlay; // inherited from NSObject
}

declare class AGSKMLPlacemark extends AGSKMLNode implements AGSGeoElement {

	static KMLNode(): AGSKMLPlacemark; // inherited from AGSKMLNode

	static KMLPlacemarkWithGeometry(geometry: AGSKMLGeometry): AGSKMLPlacemark;

	static alloc(): AGSKMLPlacemark; // inherited from NSObject

	static new(): AGSKMLPlacemark; // inherited from NSObject

	readonly geometries: NSArray<AGSKMLGeometry>;

	readonly graphicType: AGSKMLGraphicType;

	readonly attributes: NSMutableDictionary<string, any>; // inherited from AGSGeoElement

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	geometry: AGSGeometry; // inherited from AGSGeoElement

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { geometry: AGSKMLGeometry; });

	addGeometry(geometry: AGSKMLGeometry): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithGeometry(geometry: AGSKMLGeometry): this;

	insertGeometryAtIndex(geometry: AGSKMLGeometry, index: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllGeometries(): void;

	removeGeometryAtIndex(index: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSKMLPolygonStyle extends AGSKMLColorStyle {

	static KMLPolygonStyleWithColor(color: UIColor): AGSKMLPolygonStyle;

	static alloc(): AGSKMLPolygonStyle; // inherited from NSObject

	static new(): AGSKMLPolygonStyle; // inherited from NSObject

	filled: boolean;

	outlined: boolean;

	constructor(o: { color: UIColor; });

	initWithColor(color: UIColor): this;
}

declare const enum AGSKMLRefreshMode {

	OnChange = 0,

	OnInterval = 1,

	OnExpire = 2
}

declare const enum AGSKMLRefreshStatus {

	None = 0,

	InProgress = 1,

	Completed = 2,

	Failed = 3
}

declare class AGSKMLScreenOverlay extends AGSKMLNode {

	static KMLNode(): AGSKMLScreenOverlay; // inherited from AGSKMLNode

	static KMLScreenOverlayWithIcon(icon: AGSKMLIcon): AGSKMLScreenOverlay;

	static alloc(): AGSKMLScreenOverlay; // inherited from NSObject

	static new(): AGSKMLScreenOverlay; // inherited from NSObject

	color: UIColor;

	drawOrder: number;

	icon: AGSKMLIcon;

	overlayCoordinate: AGSKMLImageCoordinate;

	rotation: number;

	rotationCoordinate: AGSKMLImageCoordinate;

	screenCoordinate: AGSKMLImageCoordinate;

	size: AGSKMLImageCoordinate;

	constructor(o: { icon: AGSKMLIcon; });

	initWithIcon(icon: AGSKMLIcon): this;
}

declare class AGSKMLStyle extends AGSObject {

	static KMLStyle(): AGSKMLStyle;

	static alloc(): AGSKMLStyle; // inherited from NSObject

	static new(): AGSKMLStyle; // inherited from NSObject

	iconStyle: AGSKMLIconStyle;

	labelStyle: AGSKMLLabelStyle;

	lineStyle: AGSKMLLineStyle;

	polygonStyle: AGSKMLPolygonStyle;
}

declare class AGSKMLTour extends AGSKMLNode {

	static KMLNode(): AGSKMLTour; // inherited from AGSKMLNode

	static alloc(): AGSKMLTour; // inherited from NSObject

	static new(): AGSKMLTour; // inherited from NSObject

	readonly tourStatus: AGSKMLTourStatus;
}

declare class AGSKMLTourController extends AGSObject {

	static KMLTourController(): AGSKMLTourController;

	static alloc(): AGSKMLTourController; // inherited from NSObject

	static new(): AGSKMLTourController; // inherited from NSObject

	readonly currentPosition: number;

	readonly totalDuration: number;

	tour: AGSKMLTour;

	pause(): void;

	play(): void;

	reset(): void;
}

declare const enum AGSKMLTourStatus {

	NotInitialized = 0,

	Initializing = 1,

	Initialized = 2,

	Playing = 3,

	Paused = 4,

	Completed = 5
}

declare const enum AGSKMLUnitsType {

	Fraction = 0,

	Pixels = 1,

	InsetPixels = 2
}

declare const enum AGSKMLViewRefreshMode {

	Never = 0,

	OnStop = 1,

	OnRequest = 2,

	OnRegion = 3
}

declare class AGSKMLViewpoint extends AGSObject {

	static KMLViewpointWithCameraLocationHeadingPitchRollAltitudeMode(cameraLocation: AGSPoint, heading: number, pitch: number, roll: number, altitudeMode: AGSKMLAltitudeMode): AGSKMLViewpoint;

	static KMLViewpointWithLookAtLocationHeadingPitchRangeAltitudeMode(lookAtLocation: AGSPoint, heading: number, pitch: number, range: number, altitudeMode: AGSKMLAltitudeMode): AGSKMLViewpoint;

	static KMLViewpointWithViewpoint(viewpoint: AGSViewpoint): AGSKMLViewpoint;

	static alloc(): AGSKMLViewpoint; // inherited from NSObject

	static new(): AGSKMLViewpoint; // inherited from NSObject

	readonly altitudeMode: AGSKMLAltitudeMode;

	readonly heading: number;

	readonly location: AGSPoint;

	readonly pitch: number;

	readonly range: number;

	readonly roll: number;

	readonly type: AGSKMLViewpointType;
}

declare const enum AGSKMLViewpointType {

	Camera = 0,

	LookAt = 1,

	Unknown = -1
}

declare class AGSKeychainItem extends NSObject {

	static alloc(): AGSKeychainItem; // inherited from NSObject

	static keychainItemWithIdentifierAccessGroupAcrossDevices(identifier: string, accessGroup: string, acrossDevices: boolean): AGSKeychainItem;

	static keychainItemWithIdentifierAccessGroupAcrossDevicesAccessible(identifier: string, accessGroup: string, acrossDevices: boolean, accessible: AGSKeychainItemAccessible): AGSKeychainItem;

	static new(): AGSKeychainItem; // inherited from NSObject

	readonly accessGroup: string;

	readonly identifier: string;

	readonly sharedAcrossDevices: boolean;

	constructor(o: { identifier: string; accessGroup: string; acrossDevices: boolean; });

	constructor(o: { identifier: string; accessGroup: string; acrossDevices: boolean; accessible: AGSKeychainItemAccessible; });

	initWithIdentifierAccessGroupAcrossDevices(identifier: string, accessGroup: string, acrossDevices: boolean): this;

	initWithIdentifierAccessGroupAcrossDevicesAccessible(identifier: string, accessGroup: string, acrossDevices: boolean, accessible: AGSKeychainItemAccessible): this;

	readObjectFromKeychain(): NSCoding;

	removeObjectFromKeychainWithCompletion(completion: (p1: NSError) => void): void;

	writeObjectToKeychainCompletion(object: NSCoding, completion: (p1: NSError) => void): void;
}

declare const enum AGSKeychainItemAccessible {

	AfterFirstUnlock = 0,

	AfterFirstUnlockThisDeviceOnly = 1,

	Always = 2,

	WhenPasscodeSetThisDeviceOnly = 3,

	AlwaysThisDeviceOnly = 4,

	WhenUnlocked = 5,

	WhenUnlockedThisDeviceOnly = 6
}

declare class AGSLabelDefinition extends AGSObject implements AGSJSONSerializable {

	static alloc(): AGSLabelDefinition; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSLabelDefinition; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare class AGSLabelingInfo extends AGSObject {

	static alloc(): AGSLabelingInfo; // inherited from NSObject

	static new(): AGSLabelingInfo; // inherited from NSObject

	readonly labelExpression: string;

	readonly labelPlacement: AGSLabelingPlacement;

	readonly maxScale: number;

	readonly minScale: number;

	readonly symbol: AGSSymbol;

	readonly useCodedValues: boolean;

	readonly where: string;
}

declare const enum AGSLabelingPlacement {

	Unknown = -1,

	LineAboveAfter = 0,

	LineAboveAlong = 1,

	LineAboveBefore = 2,

	LineAboveEnd = 3,

	LineAboveStart = 4,

	LineBelowAfter = 5,

	LineBelowAlong = 6,

	LineBelowBefore = 7,

	LineBelowEnd = 8,

	LineBelowStart = 9,

	LineCenterAfter = 10,

	LineCenterAlong = 11,

	LineCenterBefore = 12,

	LineCenterEnd = 13,

	LineCenterStart = 14,

	PointAboveCenter = 15,

	PointAboveLeft = 16,

	PointAboveRight = 17,

	PointBelowCenter = 18,

	PointBelowLeft = 19,

	PointBelowRight = 20,

	PointCenterCenter = 21,

	PointCenterLeft = 22,

	PointCenterRight = 23,

	PolygonAlwaysHorizontal = 24
}

declare const enum AGSLatitudeLongitudeFormat {

	DecimalDegrees = 0,

	DegreesDecimalMinutes = 1,

	DegreesMinutesSeconds = 2
}

declare class AGSLatitudeLongitudeGrid extends AGSGrid {

	static alloc(): AGSLatitudeLongitudeGrid; // inherited from NSObject

	static latitudeLongitudeGrid(): AGSLatitudeLongitudeGrid;

	static new(): AGSLatitudeLongitudeGrid; // inherited from NSObject

	labelFormat: AGSLatitudeLongitudeGridLabelFormat;
}

declare const enum AGSLatitudeLongitudeGridLabelFormat {

	DecimalDegrees = 0,

	DegreesMinutesSeconds = 1
}

declare class AGSLayer extends AGSLoadableBase implements AGSLayerContent, NSCopying {

	static alloc(): AGSLayer; // inherited from NSObject

	static new(): AGSLayer; // inherited from NSObject

	readonly attribution: string;

	readonly fullExtent: AGSEnvelope;

	readonly identifyEnabled: boolean;

	readonly item: AGSItem;

	layerDescription: string;

	layerID: string;

	maxScale: number;

	minScale: number;

	name: string;

	opacity: number;

	readonly spatialReference: AGSSpatialReference;

	readonly canChangeVisibility: boolean; // inherited from AGSLayerContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	showInLegend: boolean; // inherited from AGSLayerContent

	readonly subLayerContents: NSArray<AGSLayerContent>; // inherited from AGSLayerContent

	subLayerContentsChangedHandler: () => void; // inherited from AGSLayerContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	visible: boolean; // inherited from AGSLayerContent

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	fetchLegendInfosWithCompletion(completion: (p1: NSArray<AGSLegendInfo>, p2: NSError) => void): AGSCancelable;

	isEqual(object: any): boolean;

	isEqualToLayer(other: AGSLayer): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isVisibleAtScale(scale: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface AGSLayerContent extends NSObjectProtocol {

	canChangeVisibility: boolean;

	name: string;

	showInLegend: boolean;

	subLayerContents: NSArray<AGSLayerContent>;

	subLayerContentsChangedHandler: () => void;

	visible: boolean;

	fetchLegendInfosWithCompletion(completion: (p1: NSArray<AGSLegendInfo>, p2: NSError) => void): AGSCancelable;

	isVisibleAtScale(scale: number): boolean;
}
declare var AGSLayerContent: {

	prototype: AGSLayerContent;
};

declare class AGSLayerSceneProperties extends AGSObject {

	static alloc(): AGSLayerSceneProperties; // inherited from NSObject

	static layerSceneProperties(): AGSLayerSceneProperties;

	static layerScenePropertiesWithSurfacePlacement(surfacePlacement: AGSSurfacePlacement): AGSLayerSceneProperties;

	static new(): AGSLayerSceneProperties; // inherited from NSObject

	altitudeOffset: number;

	surfacePlacement: AGSSurfacePlacement;

	constructor(o: { surfacePlacement: AGSSurfacePlacement; });

	initWithSurfacePlacement(surfacePlacement: AGSSurfacePlacement): this;
}

declare class AGSLayerTimeInfo extends AGSObject {

	static alloc(): AGSLayerTimeInfo; // inherited from NSObject

	static new(): AGSLayerTimeInfo; // inherited from NSObject

	readonly endTimeField: string;

	readonly hasLiveData: boolean;

	readonly interval: AGSTimeValue;

	readonly startTimeField: string;

	readonly timeExtent: AGSTimeExtent;

	readonly timeInterval: number;

	readonly timeReference: AGSTimeReference;

	readonly timeUnit: AGSTimeUnit;

	readonly trackIDField: string;
}

declare class AGSLayerViewState extends AGSObject {

	static alloc(): AGSLayerViewState; // inherited from NSObject

	static new(): AGSLayerViewState; // inherited from NSObject

	readonly error: NSError;

	readonly status: AGSLayerViewStatus;
}

declare const enum AGSLayerViewStatus {

	Active = 1,

	NotVisible = 2,

	OutOfScale = 4,

	Loading = 8,

	Error = 16
}

declare class AGSLegendInfo extends AGSObject {

	static alloc(): AGSLegendInfo; // inherited from NSObject

	static new(): AGSLegendInfo; // inherited from NSObject

	readonly name: string;

	readonly symbol: AGSSymbol;

	isEqualToLegendInfo(other: AGSLegendInfo): boolean;
}

declare class AGSLevelOfDetail extends AGSObject {

	static alloc(): AGSLevelOfDetail; // inherited from NSObject

	static levelOfDetailWithLevelResolutionScale(level: number, resolution: number, scale: number): AGSLevelOfDetail;

	static new(): AGSLevelOfDetail; // inherited from NSObject

	readonly level: number;

	readonly resolution: number;

	readonly scale: number;

	constructor(o: { level: number; resolution: number; scale: number; });

	initWithLevelResolutionScale(level: number, resolution: number, scale: number): this;
}

declare class AGSLicense extends AGSObject {

	static alloc(): AGSLicense; // inherited from NSObject

	static new(): AGSLicense; // inherited from NSObject

	readonly expiry: Date;

	readonly extensions: NSArray<AGSExtensionLicense>;

	readonly licenseLevel: AGSLicenseLevel;

	readonly licenseStatus: AGSLicenseStatus;

	readonly licenseType: AGSLicenseType;

	readonly permanent: boolean;
}

declare class AGSLicenseInfo extends AGSObject implements AGSJSONSerializable {

	static alloc(): AGSLicenseInfo; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSLicenseInfo; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare const enum AGSLicenseLevel {

	Developer = 0,

	Lite = 1,

	Basic = 2,

	Standard = 3,

	Advanced = 4
}

declare class AGSLicenseResult extends AGSObject {

	static alloc(): AGSLicenseResult; // inherited from NSObject

	static new(): AGSLicenseResult; // inherited from NSObject

	readonly extensionsStatus: NSDictionary<string, number>;

	readonly licenseStatus: AGSLicenseStatus;
}

declare const enum AGSLicenseStatus {

	Invalid = 0,

	Expired = 1,

	LoginRequired = 2,

	Valid = 3
}

declare const enum AGSLicenseType {

	Developer = 0,

	NamedUser = 1,

	LicenseKey = 2
}

declare const enum AGSLightingMode {

	NoLight = 0,

	Light = 1,

	LightAndShadows = 2
}

declare class AGSLineOfSight extends AGSAnalysis {

	static alloc(): AGSLineOfSight; // inherited from NSObject

	static lineWidth(): number;

	static new(): AGSLineOfSight; // inherited from NSObject

	static obstructedColor(): UIColor;

	static setLineWidth(lineWidth: number): void;

	static setObstructedColor(obstructedColor: UIColor): void;

	static setVisibleColor(visibleColor: UIColor): void;

	static visibleColor(): UIColor;

	readonly targetVisibility: AGSLineOfSightTargetVisibility;
}

declare const enum AGSLineOfSightTargetVisibility {

	Visible = 0,

	Obstructed = 1,

	Unknown = 2
}

declare class AGSLineSegment extends AGSSegment {

	static alloc(): AGSLineSegment; // inherited from NSObject

	static lineSegmentWithStartPointAngleLength(startPoint: AGSPoint, angle: number, length: number): AGSLineSegment;

	static lineSegmentWithStartPointEndPoint(startPoint: AGSPoint, endPoint: AGSPoint): AGSLineSegment;

	static lineSegmentWithStartPointEndPointSpatialReference(startPoint: AGSPoint, endPoint: AGSPoint, spatialReference: AGSSpatialReference): AGSLineSegment;

	static lineSegmentWithXStartYStartXEndYEnd(xStart: number, yStart: number, xEnd: number, yEnd: number): AGSLineSegment;

	static lineSegmentWithXStartYStartXEndYEndSpatialReference(xStart: number, yStart: number, xEnd: number, yEnd: number, spatialReference: AGSSpatialReference): AGSLineSegment;

	static lineSegmentWithXStartYStartZStartXEndYEndZEnd(xStart: number, yStart: number, zStart: number, xEnd: number, yEnd: number, zEnd: number): AGSLineSegment;

	static lineSegmentWithXStartYStartZStartXEndYEndZEndSpatialReference(xStart: number, yStart: number, zStart: number, xEnd: number, yEnd: number, zEnd: number, spatialReference: AGSSpatialReference): AGSLineSegment;

	static new(): AGSLineSegment; // inherited from NSObject

	constructor(o: { startPoint: AGSPoint; angle: number; length: number; });

	constructor(o: { startPoint: AGSPoint; endPoint: AGSPoint; });

	constructor(o: { startPoint: AGSPoint; endPoint: AGSPoint; spatialReference: AGSSpatialReference; });

	constructor(o: { XStart: number; yStart: number; xEnd: number; yEnd: number; });

	constructor(o: { XStart: number; yStart: number; xEnd: number; yEnd: number; spatialReference: AGSSpatialReference; });

	constructor(o: { XStart: number; yStart: number; zStart: number; xEnd: number; yEnd: number; zEnd: number; });

	constructor(o: { XStart: number; yStart: number; zStart: number; xEnd: number; yEnd: number; zEnd: number; spatialReference: AGSSpatialReference; });

	initWithStartPointAngleLength(startPoint: AGSPoint, angle: number, length: number): this;

	initWithStartPointEndPoint(startPoint: AGSPoint, endPoint: AGSPoint): this;

	initWithStartPointEndPointSpatialReference(startPoint: AGSPoint, endPoint: AGSPoint, spatialReference: AGSSpatialReference): this;

	initWithXStartYStartXEndYEnd(xStart: number, yStart: number, xEnd: number, yEnd: number): this;

	initWithXStartYStartXEndYEndSpatialReference(xStart: number, yStart: number, xEnd: number, yEnd: number, spatialReference: AGSSpatialReference): this;

	initWithXStartYStartZStartXEndYEndZEnd(xStart: number, yStart: number, zStart: number, xEnd: number, yEnd: number, zEnd: number): this;

	initWithXStartYStartZStartXEndYEndZEndSpatialReference(xStart: number, yStart: number, zStart: number, xEnd: number, yEnd: number, zEnd: number, spatialReference: AGSSpatialReference): this;
}

declare class AGSLineSymbol extends AGSSymbol {

	static alloc(): AGSLineSymbol; // inherited from NSObject

	static new(): AGSLineSymbol; // inherited from NSObject

	antialias: boolean;

	color: UIColor;

	width: number;
}

declare class AGSLinearUnit extends AGSUnit {

	static alloc(): AGSLinearUnit; // inherited from NSObject

	static feet(): AGSLinearUnit;

	static kilometers(): AGSLinearUnit;

	static linearUnitWithAreaUnit(areaUnit: AGSAreaUnit): AGSLinearUnit;

	static meters(): AGSLinearUnit;

	static miles(): AGSLinearUnit;

	static new(): AGSLinearUnit; // inherited from NSObject

	static unitWithUnitID(unitID: AGSLinearUnitID): AGSLinearUnit;

	static unitWithWKID(WKID: number): AGSLinearUnit;

	readonly unitID: AGSLinearUnitID;

	constructor(o: { areaUnit: AGSAreaUnit; });

	constructor(o: { unitID: AGSLinearUnitID; });

	convertFromMeters(meters: number): number;

	convertFromUnit(value: number, fromUnit: AGSLinearUnit): number;

	convertToMeters(value: number): number;

	convertToUnit(value: number, toUnit: AGSLinearUnit): number;

	initWithAreaUnit(areaUnit: AGSAreaUnit): this;

	initWithUnitID(unitID: AGSLinearUnitID): this;

	toAreaUnit(): AGSAreaUnit;
}

declare const enum AGSLinearUnitID {

	Centimeters = 1033,

	Feet = 9002,

	Inches = 109008,

	Kilometers = 9036,

	Meters = 9001,

	Miles = 9093,

	Millimeters = 1025,

	NauticalMiles = 9030,

	Yards = 9096,

	Other = 0
}

declare function AGSLoadObjects(array: NSArray<AGSLoadable> | AGSLoadable[], completion: (p1: boolean) => void): void;

declare class AGSLoadSettings extends AGSObject {

	static alloc(): AGSLoadSettings; // inherited from NSObject

	static loadSettings(): AGSLoadSettings;

	static new(): AGSLoadSettings; // inherited from NSObject

	preferredPointFeatureRenderingMode: AGSFeatureRenderingMode;

	preferredPolygonFeatureRenderingMode: AGSFeatureRenderingMode;

	preferredPolylineFeatureRenderingMode: AGSFeatureRenderingMode;

	useAdvancedSymbology: boolean;
}

declare const enum AGSLoadStatus {

	Loaded = 0,

	Loading = 1,

	FailedToLoad = 2,

	NotLoaded = 3,

	Unknown = -1
}

declare function AGSLoadStatusAsString(loadStatus: AGSLoadStatus): string;

declare function AGSLoadStatusFromString(loadStatus: string): AGSLoadStatus;

interface AGSLoadable extends NSObjectProtocol {

	loadError: NSError;

	loadStatus: AGSLoadStatus;

	cancelLoad(): void;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;
}
declare var AGSLoadable: {

	prototype: AGSLoadable;
};

declare class AGSLoadableBase extends AGSObject implements AGSLoadable {

	static alloc(): AGSLoadableBase; // inherited from NSObject

	static new(): AGSLoadableBase; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly loadError: NSError; // inherited from AGSLoadable

	readonly loadStatus: AGSLoadStatus; // inherited from AGSLoadable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancelLoad(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	doCancelLoading(): void;

	doStartLoading(retrying: boolean): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadDidFinishWithError(error: NSError): void;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	onLoadStatusChanged(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;

	self(): this;
}

declare var AGSLoadableDidFailToLoadNotification: string;

declare var AGSLoadableDidLoadNotification: string;

declare class AGSLoadableImage extends AGSLoadableBase {

	static alloc(): AGSLoadableImage; // inherited from NSObject

	static new(): AGSLoadableImage; // inherited from NSObject

	readonly image: UIImage;
}

declare class AGSLoadableRemoteResourceBase extends AGSLoadableBase implements AGSRemoteResource {

	static alloc(): AGSLoadableRemoteResourceBase; // inherited from NSObject

	static new(): AGSLoadableRemoteResourceBase; // inherited from NSObject

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSLoadableValue extends AGSLoadableBase {

	static alloc(): AGSLoadableValue; // inherited from NSObject

	static new(): AGSLoadableValue; // inherited from NSObject

	readonly value: any;
}

declare class AGSLocalItem extends AGSItem {

	static alloc(): AGSLocalItem; // inherited from NSObject

	static new(): AGSLocalItem; // inherited from NSObject

	readonly fileURL: NSURL;

	readonly originalPortalItemID: string;

	readonly portalURL: NSURL;

	readonly type: AGSLocalItemType;
}

declare const enum AGSLocalItemType {

	Unknown = -1,

	MobileMap = 0,

	MobileScene = 1,

	MobileMapPackage = 2,

	MobileScenePackage = 3
}

declare class AGSLocation extends AGSObject {

	static alloc(): AGSLocation; // inherited from NSObject

	static locationWithCLLocation(cllocation: CLLocation): AGSLocation;

	static locationWithPositionHorizontalAccuracyVelocityCourseLastKnown(position: AGSPoint, horizontalAccuracy: number, velocity: number, course: number, lastKnown: boolean): AGSLocation;

	static locationWithPositionTimestampHorizontalAccuracyVerticalAccuracyVelocityCourseLastKnown(position: AGSPoint, timestamp: Date, horizontalAccuracy: number, verticalAccuracy: number, velocity: number, course: number, lastKnown: boolean): AGSLocation;

	static new(): AGSLocation; // inherited from NSObject

	readonly course: number;

	readonly horizontalAccuracy: number;

	readonly lastKnown: boolean;

	readonly position: AGSPoint;

	readonly timestamp: Date;

	readonly velocity: number;

	readonly verticalAccuracy: number;

	constructor(o: { position: AGSPoint; horizontalAccuracy: number; velocity: number; course: number; lastKnown: boolean; });

	constructor(o: { position: AGSPoint; timestamp: Date; horizontalAccuracy: number; verticalAccuracy: number; velocity: number; course: number; lastKnown: boolean; });

	initWithPositionHorizontalAccuracyVelocityCourseLastKnown(position: AGSPoint, horizontalAccuracy: number, velocity: number, course: number, lastKnown: boolean): this;

	initWithPositionTimestampHorizontalAccuracyVerticalAccuracyVelocityCourseLastKnown(position: AGSPoint, timestamp: Date, horizontalAccuracy: number, verticalAccuracy: number, velocity: number, course: number, lastKnown: boolean): this;
}

interface AGSLocationChangeHandlerDelegate extends NSObjectProtocol {

	locationDataSourceHeadingDidChange?(locationDataSource: AGSLocationDataSource, heading: number): void;

	locationDataSourceLocationDidChange?(locationDataSource: AGSLocationDataSource, location: AGSLocation): void;

	locationDataSourceStatusDidChange?(locationDataSource: AGSLocationDataSource, status: AGSLocationDataSourceStatus): void;
}
declare var AGSLocationChangeHandlerDelegate: {

	prototype: AGSLocationChangeHandlerDelegate;
};

declare class AGSLocationDataSource extends AGSObject {

	static alloc(): AGSLocationDataSource; // inherited from NSObject

	static new(): AGSLocationDataSource; // inherited from NSObject

	readonly error: NSError;

	locationChangeHandlerDelegate: AGSLocationChangeHandlerDelegate;

	readonly started: boolean;

	didStartOrFailWithError(error: NSError): void;

	didStop(): void;

	didUpdateHeading(heading: number): void;

	didUpdateLocation(location: AGSLocation): void;

	doStart(): void;

	doStop(): void;

	startWithCompletion(completion: (p1: NSError) => void): void;

	stop(): void;
}

declare const enum AGSLocationDataSourceStatus {

	Stopped = 0,

	Starting = 1,

	Started = 2,

	FailedToStart = 4
}

declare class AGSLocationDisplay extends AGSObject {

	static alloc(): AGSLocationDisplay; // inherited from NSObject

	static new(): AGSLocationDisplay; // inherited from NSObject

	accuracySymbol: AGSSymbol;

	acquiringSymbol: AGSSymbol;

	autoPanMode: AGSLocationDisplayAutoPanMode;

	autoPanModeChangedHandler: (p1: AGSLocationDisplayAutoPanMode) => void;

	courseSymbol: AGSSymbol;

	dataSource: AGSLocationDataSource;

	dataSourceStatusChangedHandler: (p1: boolean) => void;

	defaultSymbol: AGSSymbol;

	readonly heading: number;

	headingSymbol: AGSSymbol;

	initialZoomScale: number;

	readonly location: AGSLocation;

	locationChangedHandler: (p1: AGSLocation) => void;

	readonly mapLocation: AGSPoint;

	navigationPointHeightFactor: number;

	opacity: number;

	pingAnimationSymbol: AGSSymbol;

	showAccuracy: boolean;

	showLocation: boolean;

	showPingAnimationSymbol: boolean;

	readonly started: boolean;

	useCourseSymbolOnMovement: boolean;

	wanderExtentFactor: number;

	startWithCompletion(completion: (p1: NSError) => void): void;

	stop(): void;
}

declare const enum AGSLocationDisplayAutoPanMode {

	Off = 0,

	Recenter = 1,

	Navigation = 2,

	CompassNavigation = 3
}

declare class AGSLocationDistanceMeasurement extends AGSAnalysis {

	static alloc(): AGSLocationDistanceMeasurement; // inherited from NSObject

	static locationDistanceMeasurementWithStartLocationEndLocation(startLocation: AGSPoint, endLocation: AGSPoint): AGSLocationDistanceMeasurement;

	static new(): AGSLocationDistanceMeasurement; // inherited from NSObject

	readonly directDistance: AGSDistance;

	endLocation: AGSPoint;

	readonly horizontalDistance: AGSDistance;

	measurementChangedHandler: (p1: AGSDistance, p2: AGSDistance, p3: AGSDistance) => void;

	startLocation: AGSPoint;

	unitSystem: AGSUnitSystem;

	readonly verticalDistance: AGSDistance;

	constructor(o: { startLocation: AGSPoint; endLocation: AGSPoint; });

	initWithStartLocationEndLocation(startLocation: AGSPoint, endLocation: AGSPoint): this;
}

declare class AGSLocationLineOfSight extends AGSLineOfSight {

	static alloc(): AGSLocationLineOfSight; // inherited from NSObject

	static lineOfSightWithObserverLocationTargetLocation(observerLocation: AGSPoint, targetLocation: AGSPoint): AGSLocationLineOfSight;

	static new(): AGSLocationLineOfSight; // inherited from NSObject

	observerLocation: AGSPoint;

	targetLocation: AGSPoint;

	constructor(o: { observerLocation: AGSPoint; targetLocation: AGSPoint; });

	initWithObserverLocationTargetLocation(observerLocation: AGSPoint, targetLocation: AGSPoint): this;
}

declare const enum AGSLocationStatus {

	NotLocated = 0,

	OnClosest = 1,

	OnClosestNotRestricted = 2,

	NotReached = 3
}

declare class AGSLocationToScreenResult extends AGSObject {

	static alloc(): AGSLocationToScreenResult; // inherited from NSObject

	static new(): AGSLocationToScreenResult; // inherited from NSObject

	readonly screenPoint: CGPoint;

	readonly visibility: AGSScreenLocationVisibility;
}

declare class AGSLocationViewshed extends AGSViewshed {

	static alloc(): AGSLocationViewshed; // inherited from NSObject

	static locationViewshedWithCameraMinDistanceMaxDistance(camera: AGSCamera, minDistance: number, maxDistance: number): AGSLocationViewshed;

	static locationViewshedWithLocationHeadingPitchHorizontalAngleVerticalAngleMinDistanceMaxDistance(location: AGSPoint, heading: number, pitch: number, horizontalAngle: number, verticalAngle: number, minDistance: number, maxDistance: number): AGSLocationViewshed;

	static new(): AGSLocationViewshed; // inherited from NSObject

	heading: number;

	location: AGSPoint;

	pitch: number;

	constructor(o: { camera: AGSCamera; minDistance: number; maxDistance: number; });

	constructor(o: { location: AGSPoint; heading: number; pitch: number; horizontalAngle: number; verticalAngle: number; minDistance: number; maxDistance: number; });

	initWithCameraMinDistanceMaxDistance(camera: AGSCamera, minDistance: number, maxDistance: number): this;

	initWithLocationHeadingPitchHorizontalAngleVerticalAngleMinDistanceMaxDistance(location: AGSPoint, heading: number, pitch: number, horizontalAngle: number, verticalAngle: number, minDistance: number, maxDistance: number): this;

	updateFromCamera(camera: AGSCamera): void;
}

declare class AGSLocatorAttribute extends AGSObject {

	static alloc(): AGSLocatorAttribute; // inherited from NSObject

	static new(): AGSLocatorAttribute; // inherited from NSObject

	readonly displayName: string;

	readonly name: string;

	readonly required: boolean;
}

declare class AGSLocatorInfo extends AGSObject {

	static alloc(): AGSLocatorInfo; // inherited from NSObject

	static new(): AGSLocatorInfo; // inherited from NSObject

	readonly intersectionResultAttributes: NSArray<AGSLocatorAttribute>;

	readonly locatorDescription: string;

	readonly name: string;

	readonly properties: NSDictionary<string, string>;

	readonly resultAttributes: NSArray<AGSLocatorAttribute>;

	readonly searchAttributes: NSArray<AGSLocatorAttribute>;

	readonly spatialReference: AGSSpatialReference;

	readonly supportsAddresses: boolean;

	readonly supportsIntersections: boolean;

	readonly supportsPOI: boolean;

	readonly supportsSuggestions: boolean;

	readonly version: string;
}

declare class AGSLocatorTask extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSLocatorTask; // inherited from NSObject

	static locatorTaskWithName(name: string): AGSLocatorTask;

	static locatorTaskWithURL(URL: NSURL): AGSLocatorTask;

	static new(): AGSLocatorTask; // inherited from NSObject

	readonly locatorInfo: AGSLocatorInfo;

	constructor(o: { name: string; });

	constructor(o: { URL: NSURL; });

	geocodeWithSearchTextCompletion(searchText: string, completion: (p1: NSArray<AGSGeocodeResult>, p2: NSError) => void): AGSCancelable;

	geocodeWithSearchTextParametersCompletion(searchText: string, parameters: AGSGeocodeParameters, completion: (p1: NSArray<AGSGeocodeResult>, p2: NSError) => void): AGSCancelable;

	geocodeWithSearchValuesCompletion(searchValues: NSDictionary<string, string>, completion: (p1: NSArray<AGSGeocodeResult>, p2: NSError) => void): AGSCancelable;

	geocodeWithSearchValuesParametersCompletion(searchValues: NSDictionary<string, string>, parameters: AGSGeocodeParameters, completion: (p1: NSArray<AGSGeocodeResult>, p2: NSError) => void): AGSCancelable;

	geocodeWithSuggestResultCompletion(suggestResult: AGSSuggestResult, completion: (p1: NSArray<AGSGeocodeResult>, p2: NSError) => void): AGSCancelable;

	geocodeWithSuggestResultParametersCompletion(suggestResult: AGSSuggestResult, parameters: AGSGeocodeParameters, completion: (p1: NSArray<AGSGeocodeResult>, p2: NSError) => void): AGSCancelable;

	initWithName(name: string): this;

	initWithURL(URL: NSURL): this;

	reverseGeocodeWithLocationCompletion(location: AGSPoint, completion: (p1: NSArray<AGSGeocodeResult>, p2: NSError) => void): AGSCancelable;

	reverseGeocodeWithLocationParametersCompletion(location: AGSPoint, parameters: AGSReverseGeocodeParameters, completion: (p1: NSArray<AGSGeocodeResult>, p2: NSError) => void): AGSCancelable;

	suggestWithSearchTextCompletion(searchText: string, completion: (p1: NSArray<AGSSuggestResult>, p2: NSError) => void): AGSCancelable;

	suggestWithSearchTextParametersCompletion(searchText: string, parameters: AGSSuggestParameters, completion: (p1: NSArray<AGSSuggestResult>, p2: NSError) => void): AGSCancelable;
}

declare const enum AGSMGRSConversionMode {

	Automatic = 0,

	New180InZone01 = 1,

	New180InZone60 = 2,

	Old180InZone01 = 3,

	Old180InZone60 = 4
}

declare class AGSMGRSGrid extends AGSGrid {

	static MGRSGrid(): AGSMGRSGrid;

	static alloc(): AGSMGRSGrid; // inherited from NSObject

	static new(): AGSMGRSGrid; // inherited from NSObject

	labelUnit: AGSMGRSGridLabelUnit;
}

declare const enum AGSMGRSGridLabelUnit {

	KilometersMeters = 0,

	Meters = 1
}

declare class AGSMap extends AGSLoadableBase implements AGSJSONSerializable, NSCopying {

	static alloc(): AGSMap; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static map(): AGSMap;

	static mapWithBasemap(basemap: AGSBasemap): AGSMap;

	static mapWithBasemapTypeLatitudeLongitudeLevelOfDetail(basemapType: AGSBasemapType, latitude: number, longitude: number, levelOfDetail: number): AGSMap;

	static mapWithItem(item: AGSItem): AGSMap;

	static mapWithSpatialReference(spatialReference: AGSSpatialReference): AGSMap;

	static mapWithURL(URL: NSURL): AGSMap;

	static new(): AGSMap; // inherited from NSObject

	backgroundColor: UIColor;

	basemap: AGSBasemap;

	readonly bookmarks: NSMutableArray<AGSBookmark>;

	initialViewpoint: AGSViewpoint;

	readonly item: AGSItem;

	loadSettings: AGSLoadSettings;

	maxScale: number;

	minScale: number;

	readonly offlineSettings: AGSOfflineSettings;

	readonly operationalLayers: NSMutableArray<AGSLayer>;

	referenceScale: number;

	readonly spatialReference: AGSSpatialReference;

	readonly tables: NSMutableArray<AGSFeatureTable>;

	readonly transportationNetworks: NSArray<AGSTransportationNetworkDataset>;

	readonly version: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { basemap: AGSBasemap; });

	constructor(o: { basemapType: AGSBasemapType; latitude: number; longitude: number; levelOfDetail: number; });

	constructor(o: { item: AGSItem; });

	constructor(o: { spatialReference: AGSSpatialReference; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithBasemap(basemap: AGSBasemap): this;

	initWithBasemapTypeLatitudeLongitudeLevelOfDetail(basemapType: AGSBasemapType, latitude: number, longitude: number, levelOfDetail: number): this;

	initWithItem(item: AGSItem): this;

	initWithSpatialReference(spatialReference: AGSSpatialReference): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveAsPortalTagsFolderItemDescriptionThumbnailForceSaveToSupportedVersionCompletion(title: string, portal: AGSPortal, tags: NSArray<string> | string[], folder: AGSPortalFolder, itemDescription: string, thumbnail: UIImage, forceSaveToSupportedVersion: boolean, completion: (p1: NSError) => void): AGSCancelable;

	saveWithForceSaveToSupportedVersionCompletion(forceSaveToSupportedVersion: boolean, completion: (p1: NSError) => void): AGSCancelable;

	self(): this;

	toJSON(): any;
}

declare const enum AGSMapServiceImageFormat {

	Default = 0,

	PNG = 1,

	PNG8 = 2,

	PNG24 = 3,

	PNG32 = 4,

	JPG = 5,

	JPGPNG = 6,

	BMP = 7,

	GIF = 8,

	TIFF = 9,

	Unknown = -1
}

declare class AGSMapServiceLayerIDInfo extends AGSIDInfo {

	static alloc(): AGSMapServiceLayerIDInfo; // inherited from NSObject

	static new(): AGSMapServiceLayerIDInfo; // inherited from NSObject

	readonly defaultVisibility: boolean;

	readonly maxScale: number;

	readonly minScale: number;

	readonly parentLayerID: number;

	readonly serviceType: AGSArcGISMapServiceSublayerType;

	readonly sublayerIDs: NSArray<number>;
}

declare class AGSMapSublayerSource extends AGSSublayerSource {

	static alloc(): AGSMapSublayerSource; // inherited from NSObject

	static mapSublayerSourceWithID(mapSublayerID: number): AGSMapSublayerSource;

	static new(): AGSMapSublayerSource; // inherited from NSObject

	geodatabaseVersion: string;

	readonly mapSublayerID: number;

	constructor(o: { ID: number; });

	initWithID(mapSublayerID: number): this;
}

declare class AGSMapView extends AGSMapViewCommon {

	static alloc(): AGSMapView; // inherited from NSObject

	static appearance(): AGSMapView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AGSMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AGSMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSMapView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AGSMapView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSMapView; // inherited from UIAppearance

	static new(): AGSMapView; // inherited from NSObject
}

declare class AGSMapViewCommon extends AGSGeoView {

	static alloc(): AGSMapViewCommon; // inherited from NSObject

	static appearance(): AGSMapViewCommon; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AGSMapViewCommon; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AGSMapViewCommon; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSMapViewCommon; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AGSMapViewCommon; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSMapViewCommon; // inherited from UIAppearance

	static new(): AGSMapViewCommon; // inherited from NSObject

	readonly adjustedContentInset: UIEdgeInsets;

	backgroundGrid: AGSBackgroundGrid;

	contentInset: UIEdgeInsets;

	grid: AGSGrid;

	insetsContentInsetFromSafeArea: boolean;

	interactionOptions: AGSMapViewInteractionOptions;

	labeling: AGSViewLabelProperties;

	locationDisplay: AGSLocationDisplay;

	map: AGSMap;

	readonly mapScale: number;

	readonly rotation: number;

	sketchEditor: AGSSketchEditor;

	readonly unitsPerPoint: number;

	readonly visibleArea: AGSPolygon;

	wrapAroundMode: AGSWrapAroundMode;

	locationToScreen(mapLocation: AGSPoint): CGPoint;

	screenToLocation(screen: CGPoint): AGSPoint;

	setViewpointCenterCompletion(center: AGSPoint, completion: (p1: boolean) => void): AGSCancelable;

	setViewpointCenterScaleCompletion(center: AGSPoint, scale: number, completion: (p1: boolean) => void): AGSCancelable;

	setViewpointDurationCurveCompletion(viewpoint: AGSViewpoint, duration: number, curve: AGSAnimationCurve, completion: (p1: boolean) => void): AGSCancelable;

	setViewpointGeometryCompletion(geometry: AGSGeometry, completion: (p1: boolean) => void): AGSCancelable;

	setViewpointGeometryPaddingCompletion(geometry: AGSGeometry, paddingInScreenPoints: number, completion: (p1: boolean) => void): AGSCancelable;

	setViewpointRotationCompletion(angle: number, completion: (p1: boolean) => void): AGSCancelable;

	setViewpointScaleCompletion(scale: number, completion: (p1: boolean) => void): AGSCancelable;
}

declare class AGSMapViewInteractionOptions extends NSObject {

	static alloc(): AGSMapViewInteractionOptions; // inherited from NSObject

	static mapViewInteractionOptions(): AGSMapViewInteractionOptions;

	static new(): AGSMapViewInteractionOptions; // inherited from NSObject

	allowMagnifierToPan: boolean;

	enabled: boolean;

	flickEnabled: boolean;

	magnifierEnabled: boolean;

	panEnabled: boolean;

	rotateEnabled: boolean;

	snapToNorthThreshold: number;

	zoomEnabled: boolean;

	zoomFactor: number;
}

declare class AGSMarkerSceneSymbol extends AGSSymbol {

	static alloc(): AGSMarkerSceneSymbol; // inherited from NSObject

	static new(): AGSMarkerSceneSymbol; // inherited from NSObject

	anchorPosition: AGSSceneSymbolAnchorPosition;

	color: UIColor;

	depth: number;

	heading: number;

	height: number;

	pitch: number;

	roll: number;

	width: number;
}

declare class AGSMarkerSymbol extends AGSSymbol {

	static alloc(): AGSMarkerSymbol; // inherited from NSObject

	static new(): AGSMarkerSymbol; // inherited from NSObject

	angle: number;

	angleAlignment: AGSMarkerSymbolAngleAlignment;

	leaderOffsetX: number;

	leaderOffsetY: number;

	offsetX: number;

	offsetY: number;

	rotationType: AGSSymbolRotationType;
}

declare const enum AGSMarkerSymbolAngleAlignment {

	Map = 0,

	Screen = 1
}

declare class AGSMarkerSymbolLayer extends AGSSymbolLayer {

	static alloc(): AGSMarkerSymbolLayer; // inherited from NSObject

	static new(): AGSMarkerSymbolLayer; // inherited from NSObject

	anchor: AGSSymbolAnchor;

	heading: number;

	offsetX: number;

	offsetY: number;

	size: number;
}

declare class AGSMinMaxStretchParameters extends AGSStretchParameters {

	static alloc(): AGSMinMaxStretchParameters; // inherited from NSObject

	static minMaxStretchParametersWithMinValuesMaxValues(minValues: NSArray<number> | number[], maxValues: NSArray<number> | number[]): AGSMinMaxStretchParameters;

	static new(): AGSMinMaxStretchParameters; // inherited from NSObject

	readonly maxValues: NSArray<number>;

	readonly minValues: NSArray<number>;

	constructor(o: { minValues: NSArray<number> | number[]; maxValues: NSArray<number> | number[]; });

	initWithMinValuesMaxValues(minValues: NSArray<number> | number[], maxValues: NSArray<number> | number[]): this;
}

declare class AGSMobileBasemapLayer extends AGSLayer {

	static alloc(): AGSMobileBasemapLayer; // inherited from NSObject

	static new(): AGSMobileBasemapLayer; // inherited from NSObject

	readonly fileURL: NSURL;

	readonly sublayerIDs: NSArray<number>;
}

declare class AGSMobileMapPackage extends AGSLoadableBase {

	static alloc(): AGSMobileMapPackage; // inherited from NSObject

	static checkDirectReadSupportForMobileMapPackageAtFileURLCompletion(fileURL: NSURL, completion: (p1: boolean, p2: NSError) => void): AGSCancelable;

	static mobileMapPackageWithFileURL(fileURL: NSURL): AGSMobileMapPackage;

	static mobileMapPackageWithName(name: string): AGSMobileMapPackage;

	static new(): AGSMobileMapPackage; // inherited from NSObject

	static unpackMobileMapPackageAtFileURLOutputDirectoryCompletion(fileURL: NSURL, outputDirectory: NSURL, completion: (p1: NSError) => void): AGSCancelable;

	readonly expiration: AGSExpiration;

	readonly fileURL: NSURL;

	readonly item: AGSItem;

	readonly locatorTask: AGSLocatorTask;

	readonly maps: NSArray<AGSMap>;

	readonly version: string;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { name: string; });

	close(): void;

	initWithFileURL(fileURL: NSURL): this;

	initWithName(name: string): this;
}

declare class AGSMobileScenePackage extends AGSLoadableBase {

	static alloc(): AGSMobileScenePackage; // inherited from NSObject

	static checkDirectReadSupportForMobileScenePackageAtFileURLCompletion(fileURL: NSURL, completion: (p1: boolean, p2: NSError) => void): AGSCancelable;

	static mobileScenePackageWithFileURL(fileURL: NSURL): AGSMobileScenePackage;

	static mobileScenePackageWithName(name: string): AGSMobileScenePackage;

	static new(): AGSMobileScenePackage; // inherited from NSObject

	static unpackMobileScenePackageAtFileURLOutputDirectoryCompletion(fileURL: NSURL, outputDirectory: NSURL, completion: (p1: NSError) => void): AGSCancelable;

	readonly expiration: AGSExpiration;

	readonly fileURL: NSURL;

	readonly item: AGSItem;

	readonly locatorTask: AGSLocatorTask;

	readonly scenes: NSArray<AGSScene>;

	readonly version: string;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { name: string; });

	close(): void;

	initWithFileURL(fileURL: NSURL): this;

	initWithName(name: string): this;
}

declare class AGSModelSceneSymbol extends AGSMarkerSceneSymbol implements AGSLoadable, AGSRemoteResource {

	static alloc(): AGSModelSceneSymbol; // inherited from NSObject

	static modelSceneSymbolWithNameExtensionScale(name: string, extension: string, scale: number): AGSModelSceneSymbol;

	static modelSceneSymbolWithURLScale(URL: NSURL, scale: number): AGSModelSceneSymbol;

	static new(): AGSModelSceneSymbol; // inherited from NSObject

	symbolSizeUnits: AGSSymbolSizeUnits;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly loadError: NSError; // inherited from AGSLoadable

	readonly loadStatus: AGSLoadStatus; // inherited from AGSLoadable

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; extension: string; scale: number; });

	constructor(o: { URL: NSURL; scale: number; });

	cancelLoad(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithNameExtensionScale(name: string, extension: string, scale: number): this;

	initWithURLScale(URL: NSURL, scale: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;

	self(): this;
}

declare class AGSMosaicDatasetRaster extends AGSRaster {

	static alloc(): AGSMosaicDatasetRaster; // inherited from NSObject

	static createMosaicDatasetRasterWithDatabaseAtFileURLNameSpatialReference(fileURL: NSURL, name: string, spatialReference: AGSSpatialReference): AGSMosaicDatasetRaster;

	static createMosaicDatasetRasterWithGeodatabaseNameSpatialReference(geodatabase: AGSGeodatabase, name: string, spatialReference: AGSSpatialReference): AGSMosaicDatasetRaster;

	static mosaicDatasetRasterNamesFromDatabaseAtFileURL(fileURL: NSURL): NSArray<string>;

	static mosaicDatasetRasterWithFileURLName(fileURL: NSURL, name: string): AGSMosaicDatasetRaster;

	static new(): AGSMosaicDatasetRaster; // inherited from NSObject

	static rasterWithFileURL(fileURL: NSURL): AGSMosaicDatasetRaster; // inherited from AGSRaster

	static rasterWithNameExtension(name: string, extension: string): AGSMosaicDatasetRaster; // inherited from AGSRaster

	static rasterWithRasterFunction(rasterFunction: AGSRasterFunction): AGSMosaicDatasetRaster; // inherited from AGSRaster

	static removeMosaicDatasetRasterWithNameFromGeodatabase(name: string, geodatabase: AGSGeodatabase): void;

	constructor(o: { fileURL: NSURL; name: string; });

	addRastersCompletion(parameters: AGSAddRastersParameters, completion: (p1: NSError) => void): AGSCancelable;

	initWithFileURLName(fileURL: NSURL, name: string): this;
}

declare class AGSMultilayerPointSymbol extends AGSMultilayerSymbol {

	static alloc(): AGSMultilayerPointSymbol; // inherited from NSObject

	static multilayerPointSymbolWithSymbolLayers(symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]): AGSMultilayerPointSymbol;

	static new(): AGSMultilayerPointSymbol; // inherited from NSObject

	angle: number;

	angleAlignment: AGSMarkerSymbolAngleAlignment;

	size: number;

	constructor(o: { symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]; });

	initWithSymbolLayers(symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]): this;
}

declare class AGSMultilayerPolygonSymbol extends AGSMultilayerSymbol {

	static alloc(): AGSMultilayerPolygonSymbol; // inherited from NSObject

	static multilayerPolygonSymbolWithSymbolLayers(symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]): AGSMultilayerPolygonSymbol;

	static new(): AGSMultilayerPolygonSymbol; // inherited from NSObject

	constructor(o: { symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]; });

	initWithSymbolLayers(symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]): this;
}

declare class AGSMultilayerPolylineSymbol extends AGSMultilayerSymbol {

	static alloc(): AGSMultilayerPolylineSymbol; // inherited from NSObject

	static multilayerPolylineSymbolWithSymbolLayers(symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]): AGSMultilayerPolylineSymbol;

	static new(): AGSMultilayerPolylineSymbol; // inherited from NSObject

	width: number;

	constructor(o: { symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]; });

	initWithSymbolLayers(symbolLayers: NSArray<AGSSymbolLayer> | AGSSymbolLayer[]): this;
}

declare class AGSMultilayerSymbol extends AGSSymbol {

	static alloc(): AGSMultilayerSymbol; // inherited from NSObject

	static new(): AGSMultilayerSymbol; // inherited from NSObject

	color: UIColor;

	readonly symbolLayers: NSMutableArray<AGSSymbolLayer>;
}

declare class AGSMultipart extends AGSGeometry {

	static alloc(): AGSMultipart; // inherited from NSObject

	static new(): AGSMultipart; // inherited from NSObject

	readonly parts: AGSPartCollection;
}

declare class AGSMultipartBuilder extends AGSGeometryBuilder {

	static alloc(): AGSMultipartBuilder; // inherited from NSObject

	static new(): AGSMultipartBuilder; // inherited from NSObject

	parts: AGSMutablePartCollection;

	addPartWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): this;

	addPoint(point: AGSPoint): this;

	addPointWithXY(x: number, y: number): this;

	addPointWithXYZ(x: number, y: number, z: number): this;

	addPointsToPartAtIndex(points: NSArray<AGSPoint> | AGSPoint[], partIndex: number): this;
}

declare class AGSMultipoint extends AGSGeometry {

	static alloc(): AGSMultipoint; // inherited from NSObject

	static multipointWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): AGSMultipoint;

	static new(): AGSMultipoint; // inherited from NSObject

	readonly points: AGSPointCollection;

	isEqualToGeometry(other: AGSMultipoint): boolean;

	toBuilder(): AGSMultipointBuilder;
}

declare class AGSMultipointBuilder extends AGSGeometryBuilder {

	static alloc(): AGSMultipointBuilder; // inherited from NSObject

	static multipointBuilderWithMultipoint(multipoint: AGSMultipoint): AGSMultipointBuilder;

	static multipointBuilderWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): AGSMultipointBuilder;

	static multipointBuilderWithSpatialReference(sr: AGSSpatialReference): AGSMultipointBuilder;

	static new(): AGSMultipointBuilder; // inherited from NSObject

	points: AGSMutablePointCollection;

	constructor(o: { multipoint: AGSMultipoint; });

	constructor(o: { points: NSArray<AGSPoint> | AGSPoint[]; });

	constructor(o: { spatialReference: AGSSpatialReference; });

	initWithMultipoint(multipoint: AGSMultipoint): this;

	initWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): this;

	initWithSpatialReference(sr: AGSSpatialReference): this;

	replaceGeometry(geometry: AGSMultipoint): this;

	toGeometry(): AGSMultipoint;
}

declare class AGSMutablePart extends AGSObject implements NSFastEnumeration {

	static alloc(): AGSMutablePart; // inherited from NSObject

	static new(): AGSMutablePart; // inherited from NSObject

	static partWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): AGSMutablePart;

	static partWithSpatialReference(spatialReference: AGSSpatialReference): AGSMutablePart;

	readonly empty: boolean;

	readonly endPoint: AGSPoint;

	readonly pointCount: number;

	readonly points: AGSPointCollection;

	readonly segmentCount: number;

	readonly spatialReference: AGSSpatialReference;

	readonly startPoint: AGSPoint;
	[index: number]: AGSSegment;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { points: NSArray<AGSPoint> | AGSPoint[]; });

	constructor(o: { spatialReference: AGSSpatialReference; });

	addPoint(point: AGSPoint): number;

	addPointWithXY(x: number, y: number): number;

	addPointWithXYZ(x: number, y: number, z: number): number;

	addPoints(points: NSArray<AGSPoint> | AGSPoint[]): void;

	addSegment(segment: AGSSegment): number;

	array(): NSArray<AGSSegment>;

	endPointIndexForSegmentIndex(segmentIndex: number): number;

	initWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): this;

	initWithSpatialReference(spatialReference: AGSSpatialReference): this;

	insertPointAtIndex(point: AGSPoint, index: number): void;

	insertPointWithXYAtIndex(x: number, y: number, index: number): void;

	insertPointWithXYZAtIndex(x: number, y: number, z: number, index: number): void;

	insertSegmentAtIndex(segment: AGSSegment, index: number): void;

	objectAtIndexedSubscript(idx: number): AGSSegment;

	pointAtIndex(index: number): AGSPoint;

	pointEnumerator(): AGSEnumerator;

	removeAllSegments(): void;

	removePointAtIndex(index: number): void;

	removeSegmentAtIndex(index: number): void;

	segmentAtIndex(index: number): AGSSegment;

	segmentEnumerator(): AGSEnumerator;

	segmentIndexForEndPointIndex(pointIndex: number): number;

	segmentIndexForPointIndexOutSegmentStartPointIndexOutSegmentEndPointIndex(pointIndex: number, outSegmentStartPointIndex: interop.Pointer | interop.Reference<number>, outSegmentEndPointIndex: interop.Pointer | interop.Reference<number>): void;

	segmentIndexForStartPointIndex(pointIndex: number): number;

	setObjectAtIndexedSubscript(obj: AGSSegment, idx: number): void;

	setPointAtIndex(point: AGSPoint, index: number): void;

	setPointWithXYAtIndex(x: number, y: number, index: number): void;

	setSegmentAtIndex(segment: AGSSegment, index: number): void;

	startPointIndexForSegmentIndex(segmentIndex: number): number;
}

declare class AGSMutablePartCollection extends AGSObject implements NSFastEnumeration {

	static alloc(): AGSMutablePartCollection; // inherited from NSObject

	static new(): AGSMutablePartCollection; // inherited from NSObject

	static partCollectionWithSpatialReference(spatialReference: AGSSpatialReference): AGSMutablePartCollection;

	readonly count: number;

	readonly isEmpty: boolean;

	readonly spatialReference: AGSSpatialReference;

	readonly totalPointCount: number;
	[index: number]: AGSMutablePart;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { spatialReference: AGSSpatialReference; });

	addPart(part: AGSMutablePart): number;

	array(): NSArray<AGSMutablePart>;

	indexOfPart(part: AGSMutablePart): number;

	initWithSpatialReference(spatialReference: AGSSpatialReference): this;

	insertPartAtIndex(part: AGSMutablePart, index: number): void;

	objectAtIndexedSubscript(idx: number): AGSMutablePart;

	partAtIndex(index: number): AGSMutablePart;

	partEnumerator(): AGSEnumerator;

	removeAllParts(): void;

	removePartAtIndex(index: number): void;

	setObjectAtIndexedSubscript(obj: AGSMutablePart, idx: number): void;

	setPartAtIndex(part: AGSMutablePart, index: number): void;
}

declare class AGSMutablePointCollection extends AGSObject implements NSFastEnumeration {

	static alloc(): AGSMutablePointCollection; // inherited from NSObject

	static new(): AGSMutablePointCollection; // inherited from NSObject

	static pointCollectionWithSpatialReference(spatialReference: AGSSpatialReference): AGSMutablePointCollection;

	readonly count: number;

	readonly isEmpty: boolean;

	readonly spatialReference: AGSSpatialReference;
	[index: number]: AGSPoint;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { spatialReference: AGSSpatialReference; });

	addPoint(point: AGSPoint): number;

	addPointWithXY(x: number, y: number): number;

	addPointWithXYZ(x: number, y: number, z: number): number;

	addPoints(points: NSArray<AGSPoint> | AGSPoint[]): void;

	array(): NSArray<AGSPoint>;

	enumerateXYCoordinatesUsingBlock(block: (p1: number, p2: number, p3: number) => void): void;

	indexOfPoint(point: AGSPoint): number;

	initWithSpatialReference(spatialReference: AGSSpatialReference): this;

	insertPointAtIndex(point: AGSPoint, index: number): void;

	insertPointWithXYAtIndex(x: number, y: number, index: number): void;

	insertPointWithXYZAtIndex(x: number, y: number, z: number, index: number): void;

	objectAtIndexedSubscript(idx: number): AGSPoint;

	pointAtIndex(index: number): AGSPoint;

	pointEnumerator(): AGSEnumerator;

	removeAllPoints(): void;

	removePointAtIndex(index: number): void;

	setObjectAtIndexedSubscript(obj: AGSPoint, idx: number): void;

	setPointAtIndex(point: AGSPoint, index: number): void;
}

declare const enum AGSNavigationConstraint {

	None = 0,

	StayAbove = 1
}

interface AGSNetworkActivityDelegate extends NSObjectProtocol {

	networkActivityEnded(): void;

	networkActivityInProgress(): void;
}
declare var AGSNetworkActivityDelegate: {

	prototype: AGSNetworkActivityDelegate;
};

declare const enum AGSNetworkDirectionsSupport {

	Unknown = -1,

	Unsupported = 0,

	Supported = 1
}

declare class AGSNetworkLocation extends AGSObject {

	static alloc(): AGSNetworkLocation; // inherited from NSObject

	static networkLocation(): AGSNetworkLocation;

	static new(): AGSNetworkLocation; // inherited from NSObject

	onRightSideOfSource: boolean;

	sourceName: string;

	sourceObjectPosition: AGSSourceObjectPosition;
}

declare const enum AGSNoDataTileBehavior {

	UpSample = 0,

	Blank = 1,

	Show = 2,

	Unknown = -1
}

declare class AGSOAuthConfiguration extends NSObject {

	static OAuthConfigurationWithPortalURLClientIDRedirectURL(portalURL: NSURL, clientID: string, redirectURL: string): AGSOAuthConfiguration;

	static alloc(): AGSOAuthConfiguration; // inherited from NSObject

	static new(): AGSOAuthConfiguration; // inherited from NSObject

	readonly clientID: string;

	readonly portalURL: NSURL;

	readonly redirectURL: string;

	refreshTokenExchangeInterval: number;

	refreshTokenExpirationInterval: number;

	showCancelButton: boolean;

	showSocialLogins: boolean;

	userInterfaceStyle: UIUserInterfaceStyle;

	constructor(o: { portalURL: NSURL; clientID: string; redirectURL: string; });

	initWithPortalURLClientIDRedirectURL(portalURL: NSURL, clientID: string, redirectURL: string): this;
}

declare const enum AGSOGCAxisOrder {

	Auto = 0,

	Swap = 1,

	NoSwap = 2
}

declare class AGSObject extends NSObject {

	static alloc(): AGSObject; // inherited from NSObject

	static new(): AGSObject; // inherited from NSObject
}

declare class AGSObservableOperation extends AGSOperationBase {

	static alloc(): AGSObservableOperation; // inherited from NSObject

	static new(): AGSObservableOperation; // inherited from NSObject

	readonly error: NSError;

	readonly result: any;

	isRegisteredListener(listener: any): boolean;

	registerListenerForCompletion(listener: any, completion: (p1: any, p2: NSError) => void): void;

	unregisterListener(listener: any): void;
}

declare class AGSOfflineCapability extends AGSObject {

	static alloc(): AGSOfflineCapability; // inherited from NSObject

	static new(): AGSOfflineCapability; // inherited from NSObject

	readonly error: NSError;

	readonly supportsOffline: boolean;
}

declare class AGSOfflineMapCapabilities extends AGSObject {

	static alloc(): AGSOfflineMapCapabilities; // inherited from NSObject

	static new(): AGSOfflineMapCapabilities; // inherited from NSObject

	readonly hasErrors: boolean;

	readonly layerCapabilities: NSDictionary<AGSLayer, AGSOfflineCapability>;

	readonly tableCapabilities: NSDictionary<AGSFeatureTable, AGSOfflineCapability>;
}

declare class AGSOfflineMapItemInfo extends AGSObject {

	static alloc(): AGSOfflineMapItemInfo; // inherited from NSObject

	static new(): AGSOfflineMapItemInfo; // inherited from NSObject

	static offlineMapItemInfo(): AGSOfflineMapItemInfo;

	accessInformation: string;

	itemDescription: string;

	snippet: string;

	tags: NSArray<string>;

	termsOfUse: string;

	thumbnail: UIImage;

	title: string;
}

declare class AGSOfflineMapParametersKey extends AGSObject implements NSCopying {

	static alloc(): AGSOfflineMapParametersKey; // inherited from NSObject

	static new(): AGSOfflineMapParametersKey; // inherited from NSObject

	static offlineMapParametersKeyWithLayer(layer: AGSLayer): AGSOfflineMapParametersKey;

	static offlineMapParametersKeyWithServiceFeatureTable(serviceFeatureTable: AGSServiceFeatureTable): AGSOfflineMapParametersKey;

	readonly serviceURL: NSURL;

	readonly type: AGSOfflineMapParametersType;

	constructor(o: { layer: AGSLayer; });

	constructor(o: { serviceFeatureTable: AGSServiceFeatureTable; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithLayer(layer: AGSLayer): this;

	initWithServiceFeatureTable(serviceFeatureTable: AGSServiceFeatureTable): this;

	isEqualToOfflineMapParametersKey(other: AGSOfflineMapParametersKey): boolean;
}

declare const enum AGSOfflineMapParametersType {

	GenerateGeodatabase = 0,

	ExportVectorTiles = 1,

	ExportTileCache = 2,

	Unknown = -1
}

declare class AGSOfflineMapSyncJob extends AGSJob {

	static alloc(): AGSOfflineMapSyncJob; // inherited from NSObject

	static new(): AGSOfflineMapSyncJob; // inherited from NSObject

	readonly parameters: AGSOfflineMapSyncParameters;

	readonly result: AGSOfflineMapSyncResult;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: AGSOfflineMapSyncResult, p2: NSError) => void): void;
}

declare class AGSOfflineMapSyncLayerResult extends AGSObject {

	static alloc(): AGSOfflineMapSyncLayerResult; // inherited from NSObject

	static new(): AGSOfflineMapSyncLayerResult; // inherited from NSObject

	readonly editErrors: NSArray<AGSFeatureEditResult>;

	readonly error: NSError;

	readonly hasErrors: boolean;
}

declare class AGSOfflineMapSyncParameters extends AGSObject {

	static alloc(): AGSOfflineMapSyncParameters; // inherited from NSObject

	static new(): AGSOfflineMapSyncParameters; // inherited from NSObject

	static offlineMapSyncParameters(): AGSOfflineMapSyncParameters;

	preplannedScheduledUpdatesOption: AGSPreplannedScheduledUpdatesOption;

	rollbackOnFailure: boolean;

	syncDirection: AGSSyncDirection;
}

declare class AGSOfflineMapSyncResult extends AGSObject {

	static alloc(): AGSOfflineMapSyncResult; // inherited from NSObject

	static new(): AGSOfflineMapSyncResult; // inherited from NSObject

	readonly hasErrors: boolean;

	readonly layerResults: NSDictionary<AGSLayer, AGSOfflineMapSyncLayerResult>;

	readonly mobileMapPackageReopenRequired: boolean;

	readonly tableResults: NSDictionary<AGSFeatureTable, AGSOfflineMapSyncLayerResult>;
}

declare class AGSOfflineMapSyncTask extends AGSLoadableBase {

	static alloc(): AGSOfflineMapSyncTask; // inherited from NSObject

	static new(): AGSOfflineMapSyncTask; // inherited from NSObject

	static offlineMapSyncTaskWithMap(map: AGSMap): AGSOfflineMapSyncTask;

	readonly map: AGSMap;

	readonly updateCapabilities: AGSOfflineMapUpdateCapabilities;

	constructor(o: { map: AGSMap; });

	checkForUpdatesWithCompletion(completion: (p1: AGSOfflineMapUpdatesInfo, p2: NSError) => void): AGSCancelable;

	defaultOfflineMapSyncParametersWithCompletion(completion: (p1: AGSOfflineMapSyncParameters, p2: NSError) => void): AGSCancelable;

	initWithMap(map: AGSMap): this;

	offlineMapSyncJobWithParameters(parameters: AGSOfflineMapSyncParameters): AGSOfflineMapSyncJob;
}

declare class AGSOfflineMapTask extends AGSLoadableBase {

	static alloc(): AGSOfflineMapTask; // inherited from NSObject

	static new(): AGSOfflineMapTask; // inherited from NSObject

	static offlineMapTaskWithOnlineMap(onlineMap: AGSMap): AGSOfflineMapTask;

	static offlineMapTaskWithPortalItem(portalItem: AGSPortalItem): AGSOfflineMapTask;

	readonly onlineMap: AGSMap;

	readonly portalItem: AGSPortalItem;

	constructor(o: { onlineMap: AGSMap; });

	constructor(o: { portalItem: AGSPortalItem; });

	defaultDownloadPreplannedOfflineMapParametersWithAreaCompletion(preplannedMapArea: AGSPreplannedMapArea, completion: (p1: AGSDownloadPreplannedOfflineMapParameters, p2: NSError) => void): AGSCancelable;

	defaultGenerateOfflineMapParametersWithAreaOfInterestCompletion(areaOfInterest: AGSGeometry, completion: (p1: AGSGenerateOfflineMapParameters, p2: NSError) => void): AGSCancelable;

	defaultGenerateOfflineMapParametersWithAreaOfInterestMinScaleMaxScaleCompletion(areaOfInterest: AGSGeometry, minScale: number, maxScale: number, completion: (p1: AGSGenerateOfflineMapParameters, p2: NSError) => void): AGSCancelable;

	downloadPreplannedOfflineMapJobWithAreaDownloadDirectory(preplannedMapArea: AGSPreplannedMapArea, downloadDirectory: NSURL): AGSDownloadPreplannedOfflineMapJob;

	downloadPreplannedOfflineMapJobWithAreaDownloadDirectoryExcludeBasemap(preplannedMapArea: AGSPreplannedMapArea, downloadDirectory: NSURL, excludeBasemap: boolean): AGSDownloadPreplannedOfflineMapJob;

	downloadPreplannedOfflineMapJobWithParametersDownloadDirectory(parameters: AGSDownloadPreplannedOfflineMapParameters, downloadDirectory: NSURL): AGSDownloadPreplannedOfflineMapJob;

	generateOfflineMapJobWithParametersDownloadDirectory(parameters: AGSGenerateOfflineMapParameters, downloadDirectory: NSURL): AGSGenerateOfflineMapJob;

	generateOfflineMapJobWithParametersParameterOverridesDownloadDirectory(parameters: AGSGenerateOfflineMapParameters, parameterOverrides: AGSGenerateOfflineMapParameterOverrides, downloadDirectory: NSURL): AGSGenerateOfflineMapJob;

	generateOfflineMapParameterOverridesWithParametersCompletion(parameters: AGSGenerateOfflineMapParameters, completion: (p1: AGSGenerateOfflineMapParameterOverrides, p2: NSError) => void): AGSCancelable;

	getOfflineMapCapabilitiesWithParametersCompletion(parameters: AGSGenerateOfflineMapParameters, completion: (p1: AGSOfflineMapCapabilities, p2: NSError) => void): AGSCancelable;

	getPreplannedMapAreasWithCompletion(completion: (p1: NSArray<AGSPreplannedMapArea>, p2: NSError) => void): AGSCancelable;

	initWithOnlineMap(onlineMap: AGSMap): this;

	initWithPortalItem(portalItem: AGSPortalItem): this;
}

declare class AGSOfflineMapUpdateCapabilities extends AGSObject {

	static alloc(): AGSOfflineMapUpdateCapabilities; // inherited from NSObject

	static new(): AGSOfflineMapUpdateCapabilities; // inherited from NSObject

	readonly supportsScheduledUpdatesForFeatures: boolean;

	readonly supportsSyncWithFeatureServices: boolean;
}

declare class AGSOfflineMapUpdatesInfo extends AGSObject {

	static alloc(): AGSOfflineMapUpdatesInfo; // inherited from NSObject

	static new(): AGSOfflineMapUpdatesInfo; // inherited from NSObject

	readonly downloadAvailability: AGSOfflineUpdateAvailability;

	readonly mobileMapPackageReopenRequired: boolean;

	readonly scheduledUpdatesDownloadSize: number;

	readonly uploadAvailability: AGSOfflineUpdateAvailability;
}

declare class AGSOfflineSettings extends AGSObject {

	static alloc(): AGSOfflineSettings; // inherited from NSObject

	static new(): AGSOfflineSettings; // inherited from NSObject

	readonly attachmentSyncDirection: AGSAttachmentSyncDirection;

	readonly referenceBasemapFilename: string;

	readonly returnLayerAttachmentOption: AGSReturnLayerAttachmentOption;

	readonly returnSchemaOnlyForEditableLayers: boolean;
}

declare const enum AGSOfflineUpdateAvailability {

	Available = 0,

	None = 1,

	Indeterminate = -1
}

declare class AGSOpenGLView extends UIView {

	static alloc(): AGSOpenGLView; // inherited from NSObject

	static appearance(): AGSOpenGLView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AGSOpenGLView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AGSOpenGLView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSOpenGLView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AGSOpenGLView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSOpenGLView; // inherited from UIAppearance

	static new(): AGSOpenGLView; // inherited from NSObject
}

declare class AGSOpenStreetMapLayer extends AGSServiceImageTiledLayer {

	static alloc(): AGSOpenStreetMapLayer; // inherited from NSObject

	static imageTiledLayerWithTileInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSOpenStreetMapLayer; // inherited from AGSImageTiledLayer

	static new(): AGSOpenStreetMapLayer; // inherited from NSObject

	static openStreetMapLayer(): AGSOpenStreetMapLayer;

	static serviceImageTiledLayerWithTiledInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSOpenStreetMapLayer; // inherited from AGSServiceImageTiledLayer
}

interface AGSOperation extends NSObjectProtocol {

	canceled: boolean;

	internalCompletion: () => void;

	startAsynchronously: boolean;

	state: AGSOperationState;

	cancel(): void;

	execute(): void;
}
declare var AGSOperation: {

	prototype: AGSOperation;
};

declare class AGSOperationBase extends NSObject implements AGSOperation {

	static alloc(): AGSOperationBase; // inherited from NSObject

	static new(): AGSOperationBase; // inherited from NSObject

	startAsynchronously: boolean;

	readonly canceled: boolean; // inherited from AGSOperation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	internalCompletion: () => void; // inherited from AGSOperation

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly state: AGSOperationState; // inherited from AGSOperation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didComplete(everStarted: boolean): void;

	doCancel(): void;

	doExecute(): void;

	doneExecuting(): void;

	execute(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSOperationQueue extends NSObject {

	static alloc(): AGSOperationQueue; // inherited from NSObject

	static new(): AGSOperationQueue; // inherited from NSObject

	static sharedOperationQueue(): AGSOperationQueue;

	maxConcurrentOperationCount: number;

	readonly operations: NSArray<AGSOperation>;

	qualityOfService: NSQualityOfService;

	addOperation(op: AGSOperation): void;

	cancelAllOperations(): void;

	waitUntilAllOperationsAreFinished(): void;
}

declare const enum AGSOperationState {

	Ready = 0,

	Executing = 1,

	Completed = 2
}

declare class AGSOrbitGeoElementCameraController extends AGSCameraController {

	static alloc(): AGSOrbitGeoElementCameraController; // inherited from NSObject

	static new(): AGSOrbitGeoElementCameraController; // inherited from NSObject

	static orbitGeoElementCameraControllerWithTargetGeoElementDistance(targetGeoElement: AGSGeoElement, distance: number): AGSOrbitGeoElementCameraController;

	autoHeadingEnabled: boolean;

	autoPitchEnabled: boolean;

	autoRollEnabled: boolean;

	cameraDistance: number;

	cameraDistanceInteractive: boolean;

	cameraHeadingOffset: number;

	cameraHeadingOffsetInteractive: boolean;

	cameraPitchOffset: number;

	cameraPitchOffsetInteractive: boolean;

	maxCameraDistance: number;

	maxCameraHeadingOffset: number;

	maxCameraPitchOffset: number;

	minCameraDistance: number;

	minCameraHeadingOffset: number;

	minCameraPitchOffset: number;

	readonly targetGeoElement: AGSGeoElement;

	targetOffsetX: number;

	targetOffsetY: number;

	targetOffsetZ: number;

	targetVerticalScreenFactor: number;

	constructor(o: { targetGeoElement: AGSGeoElement; distance: number; });

	initWithTargetGeoElementDistance(targetGeoElement: AGSGeoElement, distance: number): this;

	moveCameraWithDistanceDeltaHeadingDeltaPitchDeltaDurationCompletion(distanceDelta: number, headingDelta: number, pitchDelta: number, duration: number, completion: (p1: boolean) => void): AGSCancelable;

	setTargetOffsetXTargetOffsetYTargetOffsetZDurationCompletion(x: number, y: number, z: number, duration: number, completion: (p1: boolean) => void): AGSCancelable;
}

declare class AGSOrbitLocationCameraController extends AGSCameraController {

	static alloc(): AGSOrbitLocationCameraController; // inherited from NSObject

	static new(): AGSOrbitLocationCameraController; // inherited from NSObject

	static orbitLocationCameraControllerWithTargetLocationCameraLocation(targetLocation: AGSPoint, cameraLocation: AGSPoint): AGSOrbitLocationCameraController;

	static orbitLocationCameraControllerWithTargetLocationDistance(targetLocation: AGSPoint, distance: number): AGSOrbitLocationCameraController;

	cameraDistance: number;

	cameraDistanceInteractive: boolean;

	cameraHeadingOffset: number;

	cameraHeadingOffsetInteractive: boolean;

	cameraPitchOffset: number;

	cameraPitchOffsetInteractive: boolean;

	maxCameraDistance: number;

	maxCameraHeadingOffset: number;

	maxCameraPitchOffset: number;

	minCameraDistance: number;

	minCameraHeadingOffset: number;

	minCameraPitchOffset: number;

	readonly targetLocation: AGSPoint;

	constructor(o: { targetLocation: AGSPoint; cameraLocation: AGSPoint; });

	constructor(o: { targetLocation: AGSPoint; distance: number; });

	initWithTargetLocationCameraLocation(targetLocation: AGSPoint, cameraLocation: AGSPoint): this;

	initWithTargetLocationDistance(targetLocation: AGSPoint, distance: number): this;

	moveCameraWithDistanceDeltaHeadingDeltaPitchDeltaDurationCompletion(distanceDelta: number, headingDelta: number, pitchDelta: number, duration: number, completion: (p1: boolean) => void): AGSCancelable;
}

declare class AGSOrderBy extends AGSObject {

	static alloc(): AGSOrderBy; // inherited from NSObject

	static new(): AGSOrderBy; // inherited from NSObject

	static orderByWithFieldNameSortOrder(fieldName: string, sortOrder: AGSSortOrder): AGSOrderBy;

	fieldName: string;

	sortOrder: AGSSortOrder;

	constructor(o: { fieldName: string; sortOrder: AGSSortOrder; });

	initWithFieldNameSortOrder(fieldName: string, sortOrder: AGSSortOrder): this;
}

declare class AGSOwnershipBasedAccessControlInfo extends AGSObject {

	static alloc(): AGSOwnershipBasedAccessControlInfo; // inherited from NSObject

	static new(): AGSOwnershipBasedAccessControlInfo; // inherited from NSObject

	readonly allowAnonymousToDelete: boolean;

	readonly allowAnonymousToUpdate: boolean;

	readonly allowOthersToDelete: boolean;

	readonly allowOthersToQuery: boolean;

	readonly allowOthersToUpdate: boolean;
}

declare const enum AGSPansharpenType {

	None = -1,

	IHS = 0,

	Brovey = 1,

	Mean = 2,

	Esri = 3,

	GramSchmidt = 4
}

declare class AGSPart extends AGSObject implements NSFastEnumeration {

	static alloc(): AGSPart; // inherited from NSObject

	static new(): AGSPart; // inherited from NSObject

	readonly empty: boolean;

	readonly endPoint: AGSPoint;

	readonly hasCurves: boolean;

	readonly pointCount: number;

	readonly points: AGSPointCollection;

	readonly segmentCount: number;

	readonly spatialReference: AGSSpatialReference;

	readonly startPoint: AGSPoint;
	[index: number]: AGSSegment;
	[Symbol.iterator](): Iterator<any>;

	array(): NSArray<AGSSegment>;

	endPointIndexForSegmentIndex(segmentIndex: number): number;

	objectAtIndexedSubscript(idx: number): AGSSegment;

	pointAtIndex(index: number): AGSPoint;

	pointEnumerator(): AGSEnumerator;

	segmentAtIndex(index: number): AGSSegment;

	segmentEnumerator(): AGSEnumerator;

	segmentIndexForEndPointIndex(pointIndex: number): number;

	segmentIndexForPointIndexOutSegmentStartPointIndexOutSegmentEndPointIndex(pointIndex: number, outSegmentStartPointIndex: interop.Pointer | interop.Reference<number>, outSegmentEndPointIndex: interop.Pointer | interop.Reference<number>): void;

	segmentIndexForStartPointIndex(pointIndex: number): number;

	startPointIndexForSegmentIndex(segmentIndex: number): number;
}

declare class AGSPartCollection extends AGSObject implements NSFastEnumeration {

	static alloc(): AGSPartCollection; // inherited from NSObject

	static new(): AGSPartCollection; // inherited from NSObject

	readonly count: number;

	readonly empty: boolean;

	readonly spatialReference: AGSSpatialReference;

	readonly totalPointCount: number;
	[index: number]: AGSPart;
	[Symbol.iterator](): Iterator<any>;

	array(): NSArray<AGSPart>;

	indexOfPart(part: AGSPart): number;

	objectAtIndexedSubscript(idx: number): AGSPart;

	partAtIndex(index: number): AGSPart;

	partEnumerator(): AGSEnumerator;
}

declare class AGSPercentClipStretchParameters extends AGSStretchParameters {

	static alloc(): AGSPercentClipStretchParameters; // inherited from NSObject

	static new(): AGSPercentClipStretchParameters; // inherited from NSObject

	static percentClipStretchParametersWithMinMax(min: number, max: number): AGSPercentClipStretchParameters;

	readonly max: number;

	readonly min: number;

	constructor(o: { min: number; max: number; });

	initWithMinMax(min: number, max: number): this;
}

declare class AGSPictureFillSymbol extends AGSFillSymbol implements AGSLoadable, AGSRemoteResource {

	static alloc(): AGSPictureFillSymbol; // inherited from NSObject

	static new(): AGSPictureFillSymbol; // inherited from NSObject

	static pictureFillSymbolWithImage(image: UIImage): AGSPictureFillSymbol;

	static pictureFillSymbolWithURL(URL: NSURL): AGSPictureFillSymbol;

	angle: number;

	height: number;

	readonly image: UIImage;

	opacity: number;

	scaleX: number;

	scaleY: number;

	width: number;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly loadError: NSError; // inherited from AGSLoadable

	readonly loadStatus: AGSLoadStatus; // inherited from AGSLoadable

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { image: UIImage; });

	constructor(o: { URL: NSURL; });

	cancelLoad(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithImage(image: UIImage): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;

	self(): this;
}

declare class AGSPictureFillSymbolLayer extends AGSFillSymbolLayer implements AGSLoadable, AGSRemoteResource {

	static alloc(): AGSPictureFillSymbolLayer; // inherited from NSObject

	static new(): AGSPictureFillSymbolLayer; // inherited from NSObject

	static pictureFillSymbolLayerWithImage(image: UIImage): AGSPictureFillSymbolLayer;

	static pictureFillSymbolLayerWithURL(URL: NSURL): AGSPictureFillSymbolLayer;

	readonly image: UIImage;

	tintColor: UIColor;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly loadError: NSError; // inherited from AGSLoadable

	readonly loadStatus: AGSLoadStatus; // inherited from AGSLoadable

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { image: UIImage; });

	constructor(o: { URL: NSURL; });

	cancelLoad(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithImage(image: UIImage): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;

	self(): this;
}

declare class AGSPictureMarkerSymbol extends AGSMarkerSymbol implements AGSLoadable, AGSRemoteResource {

	static alloc(): AGSPictureMarkerSymbol; // inherited from NSObject

	static new(): AGSPictureMarkerSymbol; // inherited from NSObject

	static pictureMarkerSymbolWithImage(image: UIImage): AGSPictureMarkerSymbol;

	static pictureMarkerSymbolWithURL(URL: NSURL): AGSPictureMarkerSymbol;

	height: number;

	readonly image: UIImage;

	opacity: number;

	width: number;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly loadError: NSError; // inherited from AGSLoadable

	readonly loadStatus: AGSLoadStatus; // inherited from AGSLoadable

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { image: UIImage; });

	constructor(o: { URL: NSURL; });

	cancelLoad(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithImage(image: UIImage): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;

	self(): this;
}

declare class AGSPictureMarkerSymbolLayer extends AGSMarkerSymbolLayer implements AGSLoadable, AGSRemoteResource {

	static alloc(): AGSPictureMarkerSymbolLayer; // inherited from NSObject

	static new(): AGSPictureMarkerSymbolLayer; // inherited from NSObject

	static pictureMarkerSymbolLayerWithImage(image: UIImage): AGSPictureMarkerSymbolLayer;

	static pictureMarkerSymbolLayerWithURL(URL: NSURL): AGSPictureMarkerSymbolLayer;

	readonly image: UIImage;

	tintColor: UIColor;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly loadError: NSError; // inherited from AGSLoadable

	readonly loadStatus: AGSLoadStatus; // inherited from AGSLoadable

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { image: UIImage; });

	constructor(o: { URL: NSURL; });

	cancelLoad(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithImage(image: UIImage): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;

	self(): this;
}

declare const enum AGSPixelType {

	Unknown = -1,

	UInt1 = 0,

	UInt2 = 1,

	UInt4 = 2,

	UInt8 = 3,

	Int8 = 4,

	UInt16 = 5,

	Int16 = 6,

	UInt32 = 7,

	Int32 = 8,

	Float32 = 9,

	Float64 = 10
}

declare class AGSPoint extends AGSGeometry {

	static alloc(): AGSPoint; // inherited from NSObject

	static new(): AGSPoint; // inherited from NSObject

	static pointWithCLLocationCoordinate2D(locationCoordinate: CLLocationCoordinate2D): AGSPoint;

	static pointWithXYMSpatialReference(x: number, y: number, m: number, spatialReference: AGSSpatialReference): AGSPoint;

	static pointWithXYSpatialReference(x: number, y: number, spatialReference: AGSSpatialReference): AGSPoint;

	static pointWithXYZMSpatialReference(x: number, y: number, z: number, m: number, spatialReference: AGSSpatialReference): AGSPoint;

	static pointWithXYZSpatialReference(x: number, y: number, z: number, spatialReference: AGSSpatialReference): AGSPoint;

	readonly m: number;

	readonly x: number;

	readonly y: number;

	readonly z: number;

	constructor(o: { CLLocationCoordinate2D: CLLocationCoordinate2D; });

	constructor(o: { x: number; y: number; m: number; spatialReference: AGSSpatialReference; });

	constructor(o: { x: number; y: number; spatialReference: AGSSpatialReference; });

	constructor(o: { x: number; y: number; z: number; m: number; spatialReference: AGSSpatialReference; });

	constructor(o: { x: number; y: number; z: number; spatialReference: AGSSpatialReference; });

	initWithCLLocationCoordinate2D(locationCoordinate: CLLocationCoordinate2D): this;

	initWithXYMSpatialReference(x: number, y: number, m: number, spatialReference: AGSSpatialReference): this;

	initWithXYSpatialReference(x: number, y: number, spatialReference: AGSSpatialReference): this;

	initWithXYZMSpatialReference(x: number, y: number, z: number, m: number, spatialReference: AGSSpatialReference): this;

	initWithXYZSpatialReference(x: number, y: number, z: number, spatialReference: AGSSpatialReference): this;

	isEqualToGeometry(other: AGSPoint): boolean;

	toBuilder(): AGSPointBuilder;

	toCLLocationCoordinate2D(): CLLocationCoordinate2D;
}

declare class AGSPointBarrier extends AGSObject implements NSCopying {

	static alloc(): AGSPointBarrier; // inherited from NSObject

	static barrierWithPoint(point: AGSPoint): AGSPointBarrier;

	static new(): AGSPointBarrier; // inherited from NSObject

	barrierID: number;

	curbApproach: AGSCurbApproach;

	geometry: AGSPoint;

	readonly locationStatus: AGSLocationStatus;

	name: string;

	type: AGSBarrierType;

	constructor(o: { point: AGSPoint; });

	addedCostForCostAttribute(attributeName: string): number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPoint(point: AGSPoint): this;

	setAddedCostForCostAttribute(addedCost: number, attributeName: string): void;
}

declare class AGSPointBuilder extends AGSGeometryBuilder {

	static alloc(): AGSPointBuilder; // inherited from NSObject

	static new(): AGSPointBuilder; // inherited from NSObject

	static pointBuilderWithPoint(point: AGSPoint): AGSPointBuilder;

	static pointBuilderWithSpatialReference(sr: AGSSpatialReference): AGSPointBuilder;

	m: number;

	x: number;

	y: number;

	z: number;

	constructor(o: { point: AGSPoint; });

	constructor(o: { spatialReference: AGSSpatialReference; });

	initWithPoint(point: AGSPoint): this;

	initWithSpatialReference(sr: AGSSpatialReference): this;

	offsetByXY(xOffset: number, yOffset: number): this;

	replaceGeometry(geometry: AGSPoint): this;

	setXY(x: number, y: number): this;

	toGeometry(): AGSPoint;
}

declare class AGSPointCloudLayer extends AGSLayer implements AGSRemoteResource {

	static alloc(): AGSPointCloudLayer; // inherited from NSObject

	static new(): AGSPointCloudLayer; // inherited from NSObject

	static pointCloudLayerWithItem(item: AGSItem): AGSPointCloudLayer;

	static pointCloudLayerWithName(name: string): AGSPointCloudLayer;

	static pointCloudLayerWithURL(URL: NSURL): AGSPointCloudLayer;

	altitudeOffset: number;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { name: string; });

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItem(item: AGSItem): this;

	initWithName(name: string): this;

	initWithURL(url: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSPointCollection extends AGSObject implements NSFastEnumeration {

	static alloc(): AGSPointCollection; // inherited from NSObject

	static new(): AGSPointCollection; // inherited from NSObject

	readonly count: number;

	readonly empty: boolean;

	readonly spatialReference: AGSSpatialReference;
	[index: number]: AGSPoint;
	[Symbol.iterator](): Iterator<any>;

	array(): NSArray<AGSPoint>;

	enumerateXYCoordinatesUsingBlock(block: (p1: number, p2: number, p3: number) => void): void;

	indexOfPoint(point: AGSPoint): number;

	objectAtIndexedSubscript(idx: number): AGSPoint;

	pointAtIndex(index: number): AGSPoint;

	pointEnumerator(): AGSEnumerator;
}

declare function AGSPointMake(x: number, y: number, spatialReference: AGSSpatialReference): AGSPoint;

declare function AGSPointMake3D(x: number, y: number, z: number, m: number, spatialReference: AGSSpatialReference): AGSPoint;

declare function AGSPointMakeWGS84(latitude: number, longitude: number): AGSPoint;

declare function AGSPointMakeWebMercator(x: number, y: number): AGSPoint;

declare class AGSPolygon extends AGSMultipart {

	static alloc(): AGSPolygon; // inherited from NSObject

	static new(): AGSPolygon; // inherited from NSObject

	static polygonWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): AGSPolygon;

	isEqualToGeometry(other: AGSPolygon): boolean;

	toBuilder(): AGSPolygonBuilder;

	toPolyline(): AGSPolyline;
}

declare class AGSPolygonBarrier extends AGSObject implements NSCopying {

	static alloc(): AGSPolygonBarrier; // inherited from NSObject

	static barrierWithPolygon(polygon: AGSPolygon): AGSPolygonBarrier;

	static new(): AGSPolygonBarrier; // inherited from NSObject

	barrierID: number;

	geometry: AGSPolygon;

	name: string;

	type: AGSBarrierType;

	constructor(o: { polygon: AGSPolygon; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPolygon(polygon: AGSPolygon): this;

	scaleFactorForCostAttribute(attributeName: string): number;

	setScaleFactorForCostAttribute(scaleFactor: number, attributeName: string): void;
}

declare class AGSPolygonBuilder extends AGSMultipartBuilder {

	static alloc(): AGSPolygonBuilder; // inherited from NSObject

	static new(): AGSPolygonBuilder; // inherited from NSObject

	static polygonBuilderWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): AGSPolygonBuilder;

	static polygonBuilderWithPolygon(poly: AGSPolygon): AGSPolygonBuilder;

	static polygonBuilderWithSpatialReference(sr: AGSSpatialReference): AGSPolygonBuilder;

	constructor(o: { points: NSArray<AGSPoint> | AGSPoint[]; });

	constructor(o: { polygon: AGSPolygon; });

	constructor(o: { spatialReference: AGSSpatialReference; });

	initWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): this;

	initWithPolygon(poly: AGSPolygon): this;

	initWithSpatialReference(sr: AGSSpatialReference): this;

	replaceGeometry(geometry: AGSPolygon): this;

	toGeometry(): AGSPolygon;

	toPolyline(): AGSPolyline;
}

declare class AGSPolyline extends AGSMultipart {

	static alloc(): AGSPolyline; // inherited from NSObject

	static new(): AGSPolyline; // inherited from NSObject

	static polylineWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): AGSPolyline;

	isEqualToGeometry(other: AGSPolyline): boolean;

	toBuilder(): AGSPolylineBuilder;
}

declare class AGSPolylineBarrier extends AGSObject implements NSCopying {

	static alloc(): AGSPolylineBarrier; // inherited from NSObject

	static barrierWithPolyline(polyline: AGSPolyline): AGSPolylineBarrier;

	static new(): AGSPolylineBarrier; // inherited from NSObject

	barrierID: number;

	geometry: AGSPolyline;

	name: string;

	type: AGSBarrierType;

	constructor(o: { polyline: AGSPolyline; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPolyline(polyline: AGSPolyline): this;

	scaleFactorForCostAttribute(attributeName: string): number;

	setScaleFactorForCostAttribute(scaleFactor: number, attributeName: string): void;
}

declare class AGSPolylineBuilder extends AGSMultipartBuilder {

	static alloc(): AGSPolylineBuilder; // inherited from NSObject

	static new(): AGSPolylineBuilder; // inherited from NSObject

	static polylineBuilderWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): AGSPolylineBuilder;

	static polylineBuilderWithPolyline(polyline: AGSPolyline): AGSPolylineBuilder;

	static polylineBuilderWithSpatialReference(sr: AGSSpatialReference): AGSPolylineBuilder;

	constructor(o: { points: NSArray<AGSPoint> | AGSPoint[]; });

	constructor(o: { polyline: AGSPolyline; });

	constructor(o: { spatialReference: AGSSpatialReference; });

	initWithPoints(points: NSArray<AGSPoint> | AGSPoint[]): this;

	initWithPolyline(polyline: AGSPolyline): this;

	initWithSpatialReference(sr: AGSSpatialReference): this;

	replaceGeometry(geometry: AGSPolyline): this;

	toGeometry(): AGSPolyline;
}

declare class AGSPopup extends AGSObject {

	static alloc(): AGSPopup; // inherited from NSObject

	static new(): AGSPopup; // inherited from NSObject

	static popupWithGeoElement(geoElement: AGSGeoElement): AGSPopup;

	static popupWithGeoElementPopupDefinition(geoElement: AGSGeoElement, popupDefinition: AGSPopupDefinition): AGSPopup;

	readonly geoElement: AGSGeoElement;

	readonly popupDefinition: AGSPopupDefinition;

	readonly symbol: AGSSymbol;

	readonly title: string;

	constructor(o: { geoElement: AGSGeoElement; });

	constructor(o: { geoElement: AGSGeoElement; popupDefinition: AGSPopupDefinition; });

	formattedValueForField(popupField: AGSPopupField): string;

	initWithGeoElement(geoElement: AGSGeoElement): this;

	initWithGeoElementPopupDefinition(geoElement: AGSGeoElement, popupDefinition: AGSPopupDefinition): this;

	stringForTemplatedString(templatedString: string): string;
}

declare class AGSPopupAttachment extends AGSLoadableBase {

	static alloc(): AGSPopupAttachment; // inherited from NSObject

	static new(): AGSPopupAttachment; // inherited from NSObject

	readonly actualSizeInBytes: number;

	readonly contentType: string;

	readonly editState: AGSPopupAttachmentEditState;

	readonly featureAttachment: AGSAttachment;

	readonly fileURL: NSURL;

	readonly isLocal: boolean;

	readonly name: string;

	preferredSize: AGSPopupAttachmentSize;

	readonly supportsPreferredSize: boolean;

	readonly type: AGSPopupAttachmentType;

	fullDisplayImageWithCompletion(completion: (p1: UIImage) => void): void;

	generateThumbnailWithSizeCompletion(size: number, completion: (p1: UIImage) => void): void;

	generateThumbnailWithSizeScaleModeCompletion(size: number, scaleMode: AGSImageScaleMode, completion: (p1: UIImage) => void): void;

	sizeInBytesForPreferredSizeWithCompletion(completion: (p1: number) => void): void;
}

declare const enum AGSPopupAttachmentEditState {

	Original = 0,

	Added = 1,

	Deleted = 2
}

declare class AGSPopupAttachmentManager extends NSObject {

	static alloc(): AGSPopupAttachmentManager; // inherited from NSObject

	static new(): AGSPopupAttachmentManager; // inherited from NSObject

	constructor(o: { feature: AGSArcGISFeature; });

	addAttachmentAsJPGWithImageNamePreferredSize(image: UIImage, name: string, preferredSize: AGSPopupAttachmentSize): AGSPopupAttachment;

	addAttachmentWithDataNameContentTypePreferredSize(data: NSData, name: string, contentType: string, preferredSize: AGSPopupAttachmentSize): AGSPopupAttachment;

	addAttachmentWithUIImagePickerControllerInfoDictionaryNamePreferredSizeCompletion(info: NSDictionary<any, any>, baseName: string, preferredSize: AGSPopupAttachmentSize, completion: (p1: AGSPopupAttachment) => void): void;

	attachments(): NSArray<AGSPopupAttachment>;

	basenameForNewAttachmentWithType(type: AGSPopupAttachmentType): string;

	deleteAttachment(attachment: AGSPopupAttachment): void;

	fetchAttachmentsWithCompletion(completion: (p1: NSArray<AGSPopupAttachment>, p2: NSError) => void): AGSCancelable;

	filteredAndSortedAttachments(): NSArray<AGSPopupAttachment>;

	initWithFeature(feature: AGSArcGISFeature): this;
}

declare const enum AGSPopupAttachmentSize {

	Actual = 0,

	Small = 1,

	Medium = 2,

	Large = 3,

	ExtraLarge = 4
}

declare const enum AGSPopupAttachmentType {

	Image = 0,

	Video = 1,

	Document = 2,

	Other = 3
}

declare const enum AGSPopupDateFormat {

	DayShortMonthYear = 0,

	LongDate = 1,

	LongMonthDayYear = 2,

	LongMonthYear = 3,

	ShortDate = 4,

	ShortDateLE = 5,

	ShortDateLELongTime = 6,

	ShortDateLELongTime24 = 7,

	ShortDateLEShortTime = 8,

	ShortDateLEShortTime24 = 9,

	ShortDateLongTime = 10,

	ShortDateLongTime24 = 11,

	ShortDateShortTime = 12,

	ShortDateShortTime24 = 13,

	ShortMonthYear = 14,

	Year = 15,

	Unknown = -1
}

declare class AGSPopupDefinition extends AGSObject {

	static alloc(): AGSPopupDefinition; // inherited from NSObject

	static new(): AGSPopupDefinition; // inherited from NSObject

	static popupDefinition(): AGSPopupDefinition;

	static popupDefinitionWithGeoElement(geoElement: AGSGeoElement): AGSPopupDefinition;

	static popupDefinitionWithPopupSource(popupSource: AGSPopupSource): AGSPopupDefinition;

	allowDelete: boolean;

	allowEdit: boolean;

	allowEditGeometry: boolean;

	customDescription: string;

	expressions: NSArray<AGSPopupExpression>;

	fields: NSArray<AGSPopupField>;

	media: NSArray<AGSPopupMedia>;

	relatedFeaturesDefinition: AGSPopupRelatedFeaturesDefinition;

	showAttachments: boolean;

	showEditSummary: boolean;

	showRelatedRecords: boolean;

	title: string;

	constructor(o: { geoElement: AGSGeoElement; });

	constructor(o: { popupSource: AGSPopupSource; });

	initWithGeoElement(geoElement: AGSGeoElement): this;

	initWithPopupSource(popupSource: AGSPopupSource): this;
}

declare class AGSPopupExpression extends AGSObject {

	static alloc(): AGSPopupExpression; // inherited from NSObject

	static new(): AGSPopupExpression; // inherited from NSObject

	static popupExpression(): AGSPopupExpression;

	expression: string;

	name: string;

	returnType: AGSPopupExpressionReturnType;

	title: string;
}

declare const enum AGSPopupExpressionReturnType {

	String = 0,

	Number = 1
}

declare const enum AGSPopupFeatureTypeChangeMode {

	ResetDefaultValues = 0,

	KeepValues = 1
}

declare class AGSPopupField extends AGSObject {

	static alloc(): AGSPopupField; // inherited from NSObject

	static new(): AGSPopupField; // inherited from NSObject

	static popupField(): AGSPopupField;

	editable: boolean;

	fieldName: string;

	format: AGSPopupFieldFormat;

	label: string;

	stringFieldOption: AGSPopupStringFieldOption;

	tooltip: string;

	visible: boolean;
}

declare class AGSPopupFieldFormat extends AGSObject {

	static alloc(): AGSPopupFieldFormat; // inherited from NSObject

	static new(): AGSPopupFieldFormat; // inherited from NSObject

	static popupFieldFormat(): AGSPopupFieldFormat;

	dateFormat: AGSPopupDateFormat;

	decimalPlaces: number;

	useThousandsSeparator: boolean;
}

declare class AGSPopupManager extends NSObject {

	static alloc(): AGSPopupManager; // inherited from NSObject

	static new(): AGSPopupManager; // inherited from NSObject

	readonly attachmentManager: AGSPopupAttachmentManager;

	readonly currentSketchEditor: AGSSketchEditor;

	readonly customDescriptionHTML: string;

	delegate: AGSPopupManagerDelegate;

	readonly displayFields: NSArray<AGSPopupField>;

	readonly editSummary: string;

	readonly editableDisplayFields: NSArray<AGSPopupField>;

	readonly editing: boolean;

	readonly featureType: AGSFeatureType;

	readonly geoElementValid: boolean;

	readonly popup: AGSPopup;

	readonly shouldAllowDelete: boolean;

	readonly shouldAllowEdit: boolean;

	readonly shouldAllowEditAttachments: boolean;

	readonly shouldAllowEditGeometry: boolean;

	readonly shouldShowAttachments: boolean;

	readonly shouldShowCustomDescriptionHTML: boolean;

	readonly shouldShowEditSummary: boolean;

	readonly shouldShowMedia: boolean;

	readonly symbol: AGSSymbol;

	readonly title: string;

	constructor(o: { popup: AGSPopup; });

	cancelEditing(): void;

	domainForField(popupField: AGSPopupField): AGSDomain;

	featureTypeChangeRequiresUserNoficationForTemplate(featureTemplate: AGSFeatureTemplate): boolean;

	featureTypeChangeRequiresUserNotificationForTemplate(featureTemplate: AGSFeatureTemplate): boolean;

	fieldForName(fieldName: string): AGSPopupField;

	fieldIsNullable(popupField: AGSPopupField): boolean;

	fieldIsTypeIDField(popupField: AGSPopupField): boolean;

	fieldTypeForField(popupField: AGSPopupField): AGSFieldType;

	finishEditingWithCompletion(completion: (p1: NSError) => void): void;

	formattedValueForField(popupField: AGSPopupField): string;

	initWithPopup(popup: AGSPopup): this;

	labelForField(popupField: AGSPopupField): string;

	lengthForField(popupField: AGSPopupField): number;

	numberFromStringField(stringValue: string, popupField: AGSPopupField): number;

	numberFromStringFieldError(stringValue: string, popupField: AGSPopupField): number;

	rangeValidationTextForField(popupField: AGSPopupField): string;

	startEditing(): boolean;

	stringForTemplatedString(templatedString: string): string;

	updateFeatureTypeWithTemplateChangeModeValidationError(featureTemplate: AGSFeatureTemplate, changeMode: AGSPopupFeatureTypeChangeMode): boolean;

	updateValueFieldValidationError(newValue: any, popupField: AGSPopupField): boolean;

	validationErrorForField(popupField: AGSPopupField): NSError;

	validationWarningForField(popupField: AGSPopupField): NSError;

	valueForField(popupField: AGSPopupField): any;
}

interface AGSPopupManagerDelegate extends NSObjectProtocol {

	popupManagerFeatureTypeDidChange?(popupManager: AGSPopupManager, featureType: AGSFeatureType): void;

	popupManagerValidityDidChange?(popupManager: AGSPopupManager, geoElementValid: boolean): void;

	sketchEditorForPopupManager?(popupManager: AGSPopupManager): AGSSketchEditor;
}
declare var AGSPopupManagerDelegate: {

	prototype: AGSPopupManagerDelegate;
};

declare var AGSPopupManagerFeatureTypeDidChangeNotification: string;

declare var AGSPopupManagerGeoElementValidityDidChangeNotification: string;

declare class AGSPopupMedia extends AGSObject {

	static alloc(): AGSPopupMedia; // inherited from NSObject

	static new(): AGSPopupMedia; // inherited from NSObject

	static popupMedia(): AGSPopupMedia;

	caption: string;

	title: string;

	type: AGSPopupMediaType;

	value: AGSPopupMediaValue;
}

declare const enum AGSPopupMediaType {

	Image = 0,

	BarChart = 1,

	ColumnChart = 2,

	LineChart = 3,

	PieChart = 4,

	Unknown = -1
}

declare class AGSPopupMediaValue extends AGSObject {

	static alloc(): AGSPopupMediaValue; // inherited from NSObject

	static new(): AGSPopupMediaValue; // inherited from NSObject

	static popupMediaValue(): AGSPopupMediaValue;

	fieldNames: NSArray<string>;

	link: string;

	normalizeFieldName: string;

	source: string;

	tooltipFieldName: string;
}

declare class AGSPopupRelatedFeaturesDefinition extends AGSObject {

	static alloc(): AGSPopupRelatedFeaturesDefinition; // inherited from NSObject

	static new(): AGSPopupRelatedFeaturesDefinition; // inherited from NSObject

	static popupRelatedFeaturesDefinition(): AGSPopupRelatedFeaturesDefinition;

	showRelatedFeatures: boolean;

	sortOrder: NSArray<AGSPopupRelatedFeaturesSortOrder>;
}

declare class AGSPopupRelatedFeaturesSortOrder extends AGSObject {

	static alloc(): AGSPopupRelatedFeaturesSortOrder; // inherited from NSObject

	static new(): AGSPopupRelatedFeaturesSortOrder; // inherited from NSObject

	static popupRelatedFeaturesSortOrder(): AGSPopupRelatedFeaturesSortOrder;

	orderByField: AGSOrderBy;

	relationshipID: number;
}

interface AGSPopupSource extends NSObjectProtocol {

	popupDefinition: AGSPopupDefinition;

	popupEnabled: boolean;
}
declare var AGSPopupSource: {

	prototype: AGSPopupSource;
};

declare const enum AGSPopupStringFieldOption {

	SingleLine = 0,

	MultiLine = 1,

	RichText = 2,

	Unknown = -1
}

declare const enum AGSPopupValidationErrorCode {

	CodeInvalidGeoElement = 11000,

	CodeNullNotAllowed = 11001,

	CodeValueOutOfRange = 11002,

	ExceedsMaxLength = 11003,

	InvalidNumericString = 11004,

	ExceedsNumericMaximum = 11005,

	LessThanNumericMinimum = 11006,

	IllegalDomainCode = 11007
}

declare var AGSPopupValidationErrorDomain: string;

declare const enum AGSPopupViewControllerType {

	Container = 0,

	UIImagePicker = 1,

	FullMedia = 2,

	Web = 3,

	Movie = 4,

	AttributeInput = 5,

	Alert = 6
}

declare class AGSPopupsViewController extends UIViewController {

	static alloc(): AGSPopupsViewController; // inherited from NSObject

	static new(): AGSPopupsViewController; // inherited from NSObject

	static popupsViewControllerWithPopups(popups: NSArray<AGSPopup> | AGSPopup[]): AGSPopupsViewController;

	static popupsViewControllerWithPopupsContainerStyle(popups: NSArray<AGSPopup> | AGSPopup[], containerStyle: AGSPopupsViewControllerContainerStyle): AGSPopupsViewController;

	readonly actionButton: UIBarButtonItem;

	readonly currentPopup: AGSPopup;

	readonly currentSketchEditor: AGSSketchEditor;

	customActionButton: UIBarButtonItem;

	customDoneButton: UIBarButtonItem;

	defaultAttachmentSize: AGSPopupAttachmentSize;

	delegate: AGSPopupsViewControllerDelegate;

	readonly doneButton: UIBarButtonItem;

	geometryEditingStyle: AGSPopupsViewControllerGeometryEditingStyle;

	readonly inEditingMode: boolean;

	modalPresenter: UIViewController;

	popups: NSArray<AGSPopup>;

	theme: AGSPopupsViewControllerTheme;

	constructor(o: { popups: NSArray<AGSPopup> | AGSPopup[]; });

	constructor(o: { popups: NSArray<AGSPopup> | AGSPopup[]; containerStyle: AGSPopupsViewControllerContainerStyle; });

	cancelEditingCurrentPopup(): void;

	clearAllPopups(): void;

	finishEditingCurrentPopupWithCompletion(completion: (p1: NSError) => void): void;

	initWithPopups(popups: NSArray<AGSPopup> | AGSPopup[]): this;

	initWithPopupsContainerStyle(popups: NSArray<AGSPopup> | AGSPopup[], containerStyle: AGSPopupsViewControllerContainerStyle): this;

	showAdditionalPopups(popups: NSArray<AGSPopup> | AGSPopup[]): void;

	startEditingCurrentPopup(): void;
}

declare const enum AGSPopupsViewControllerContainerStyle {

	NavigationController = 0,

	NavigationBar = 1,

	Custom = 2
}

interface AGSPopupsViewControllerDelegate extends NSObjectProtocol {

	popupsViewControllerDidCancelEditingForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): void;

	popupsViewControllerDidChangeFeatureTypeForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): void;

	popupsViewControllerDidChangeToCurrentPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): void;

	popupsViewControllerDidDeleteForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): void;

	popupsViewControllerDidFailToDeleteForPopupWithError?(popupsViewController: AGSPopupsViewController, popup: AGSPopup, error: NSError): void;

	popupsViewControllerDidFailToFinishEditingForPopupWithError?(popupsViewController: AGSPopupsViewController, popup: AGSPopup, error: NSError): void;

	popupsViewControllerDidFinishEditingForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): void;

	popupsViewControllerDidFinishViewingPopups?(popupsViewController: AGSPopupsViewController): void;

	popupsViewControllerDidStartEditingForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): void;

	popupsViewControllerFooterViewForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): UIView;

	popupsViewControllerHeaderViewForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): UIView;

	popupsViewControllerReadyToEditGeometryWithSketchEditorForPopup?(popupsViewController: AGSPopupsViewController, sketchEditor: AGSSketchEditor, popup: AGSPopup): void;

	popupsViewControllerShouldAutorotateForViewControllerOfType?(popupsViewController: AGSPopupsViewController, vc: UIViewController, viewType: AGSPopupViewControllerType): boolean;

	popupsViewControllerSketchEditorForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): AGSSketchEditor;

	popupsViewControllerValidityChangedForPopup?(popupsViewController: AGSPopupsViewController, isValid: boolean, popup: AGSPopup): void;

	popupsViewControllerWantsToDeleteForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): boolean;

	popupsViewControllerWantsToHideViewControllerOfType?(popupsViewController: AGSPopupsViewController, vc: UIViewController, viewType: AGSPopupViewControllerType): void;

	popupsViewControllerWantsToPreviewDocumentAtURLFromViewControllerAtRect?(popupsViewController: AGSPopupsViewController, documentURL: NSURL, fvc: UIViewController, rect: CGRect): void;

	popupsViewControllerWantsToShowViewControllerOfTypeFromViewControllerAtRect?(popupsViewController: AGSPopupsViewController, svc: UIViewController, viewType: AGSPopupViewControllerType, fvc: UIViewController, rect: CGRect): void;

	popupsViewControllerWillFinishEditingForPopup?(popupsViewController: AGSPopupsViewController, popup: AGSPopup): void;
}
declare var AGSPopupsViewControllerDelegate: {

	prototype: AGSPopupsViewControllerDelegate;
};

declare const enum AGSPopupsViewControllerGeometryEditingStyle {

	Toolbar = 0,

	Inline = 1
}

declare class AGSPopupsViewControllerTheme extends NSObject {

	static alloc(): AGSPopupsViewControllerTheme; // inherited from NSObject

	static new(): AGSPopupsViewControllerTheme; // inherited from NSObject

	attachmentDetailFont: UIFont;

	attachmentTitleFont: UIFont;

	attributeDetailColor: UIColor;

	attributeDetailFont: UIFont;

	attributeTitleColor: UIColor;

	attributeTitleFont: UIFont;

	headlineColor: UIColor;

	headlineFont: UIFont;

	tooltipColor: UIColor;
}

declare class AGSPortal extends AGSLoadableBase implements AGSRemoteResource {

	static ArcGISOnlineWithLoginRequired(loginRequired: boolean): AGSPortal;

	static alloc(): AGSPortal; // inherited from NSObject

	static loginTypeForURLCompletion(url: NSURL, completion: (p1: AGSPortalLoginType, p2: NSError) => void): AGSCancelable;

	static new(): AGSPortal; // inherited from NSObject

	static portalWithURLLoginRequired(URL: NSURL, loginRequired: boolean): AGSPortal;

	readonly featuredGroups: NSArray<AGSPortalGroup>;

	readonly loginRequired: boolean;

	readonly portalInfo: AGSPortalInfo;

	readonly user: AGSPortalUser;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; loginRequired: boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fetchBasemapsWithCompletion(completion: (p1: NSArray<AGSBasemap>, p2: NSError) => void): AGSCancelable;

	fetchFeaturedGroupsWithCompletion(completion: (p1: NSArray<AGSPortalGroup>, p2: NSError) => void): AGSCancelable;

	fetchFeaturedItemsWithCompletion(completion: (p1: NSArray<AGSPortalItem>, p2: NSError) => void): AGSCancelable;

	fetchHomePageFeaturedContentWithCompletion(completion: (p1: NSArray<AGSPortalItem>, p2: NSError) => void): AGSCancelable;

	fetchLicenseInfoWithCompletion(completion: (p1: AGSLicenseInfo, p2: NSError) => void): AGSCancelable;

	fetchVectorBasemapsWithCompletion(completion: (p1: NSArray<AGSBasemap>, p2: NSError) => void): AGSCancelable;

	findGroupsWithQueryParametersCompletion(queryParameters: AGSPortalQueryParameters, completion: (p1: AGSPortalQueryResultSet, p2: NSError) => void): AGSCancelable;

	findItemsWithQueryParametersCompletion(queryParameters: AGSPortalQueryParameters, completion: (p1: AGSPortalQueryResultSet, p2: NSError) => void): AGSCancelable;

	initWithURLLoginRequired(url: NSURL, loginRequired: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	logout(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum AGSPortalAccess {

	Unknown = -1,

	Organization = 0,

	Private = 1,

	Public = 2,

	Shared = 3
}

declare class AGSPortalFolder extends NSObject {

	static alloc(): AGSPortalFolder; // inherited from NSObject

	static new(): AGSPortalFolder; // inherited from NSObject

	readonly created: Date;

	readonly folderID: string;

	readonly portal: AGSPortal;

	readonly title: string;
}

declare class AGSPortalGroup extends AGSLoadableBase implements AGSJSONSerializable {

	static alloc(): AGSPortalGroup; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static fromJSONWithPortalError(JSONObject: any, portal: AGSPortal): AGSPortalGroup;

	static new(): AGSPortalGroup; // inherited from NSObject

	static portalGroupWithPortalGroupID(portal: AGSPortal, groupID: string): AGSPortalGroup;

	readonly access: AGSPortalAccess;

	readonly admins: NSArray<string>;

	readonly created: Date;

	readonly groupDescription: string;

	readonly groupID: string;

	readonly invitationOnly: boolean;

	readonly modified: Date;

	readonly owner: string;

	readonly phone: string;

	readonly portal: AGSPortal;

	readonly snippet: string;

	readonly sortField: AGSPortalGroupSortField;

	readonly sortOrder: AGSPortalQuerySortOrder;

	readonly tags: NSArray<string>;

	readonly thumbnail: AGSLoadableImage;

	readonly title: string;

	readonly users: NSArray<string>;

	readonly viewOnly: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { portal: AGSPortal; groupID: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fetchUsersWithCompletion(completion: (p1: NSArray<string>, p2: NSArray<string>, p3: NSError) => void): AGSCancelable;

	findItemsWithSearchParametersCompletion(parameters: AGSPortalGroupContentSearchParameters, completion: (p1: AGSPortalGroupContentSearchResultSet, p2: NSError) => void): AGSCancelable;

	initWithPortalGroupID(portal: AGSPortal, groupID: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare class AGSPortalGroupContentSearchParameters extends AGSObject {

	static alloc(): AGSPortalGroupContentSearchParameters; // inherited from NSObject

	static new(): AGSPortalGroupContentSearchParameters; // inherited from NSObject

	static portalGroupContentSearchParametersForItemWithID(itemID: string): AGSPortalGroupContentSearchParameters;

	static portalGroupContentSearchParametersForItemsOfTypeOwnerSearchString(type: AGSPortalItemType, owner: string, searchString: string): AGSPortalGroupContentSearchParameters;

	static portalGroupContentSearchParametersForItemsOfTypeSearchString(type: AGSPortalItemType, searchString: string): AGSPortalGroupContentSearchParameters;

	static portalGroupContentSearchParametersForItemsOfTypesOwnerSearchString(types: NSArray<NSValue> | NSValue[], owner: string, searchString: string): AGSPortalGroupContentSearchParameters;

	static portalGroupContentSearchParametersForItemsWithOwner(owner: string): AGSPortalGroupContentSearchParameters;

	static portalGroupContentSearchParametersWithBoundingBox(boundingBox: AGSEnvelope): AGSPortalGroupContentSearchParameters;

	static portalGroupContentSearchParametersWithQuery(query: string): AGSPortalGroupContentSearchParameters;

	static portalGroupContentSearchParametersWithQueryBoundingBox(query: string, boundingBox: AGSEnvelope): AGSPortalGroupContentSearchParameters;

	static portalGroupContentSearchParametersWithQueryLimit(query: string, limit: number): AGSPortalGroupContentSearchParameters;

	boundingBox: AGSEnvelope;

	categories: NSArray<string>;

	limit: number;

	readonly query: string;

	searchPublic: boolean;

	sortField: string;

	sortOrder: AGSPortalQuerySortOrder;

	startIndex: number;

	constructor(o: { boundingBox: AGSEnvelope; });

	constructor(o: { query: string; });

	constructor(o: { query: string; boundingBox: AGSEnvelope; });

	constructor(o: { query: string; limit: number; });

	initWithBoundingBox(boundingBox: AGSEnvelope): this;

	initWithQuery(query: string): this;

	initWithQueryBoundingBox(query: string, boundingBox: AGSEnvelope): this;

	initWithQueryLimit(query: string, limit: number): this;
}

declare class AGSPortalGroupContentSearchResultSet extends NSObject {

	static alloc(): AGSPortalGroupContentSearchResultSet; // inherited from NSObject

	static new(): AGSPortalGroupContentSearchResultSet; // inherited from NSObject

	readonly nextSearchParameters: AGSPortalGroupContentSearchParameters;

	readonly results: NSArray<AGSPortalItem>;

	readonly searchParameters: AGSPortalGroupContentSearchParameters;

	readonly totalResults: number;
}

declare const enum AGSPortalGroupSortField {

	Unknown = 0,

	Title = 1,

	Owner = 2,

	AvgRating = 3,

	NumViews = 4,

	Created = 5,

	Modified = 6
}

declare class AGSPortalHelperServices extends NSObject {

	static alloc(): AGSPortalHelperServices; // inherited from NSObject

	static new(): AGSPortalHelperServices; // inherited from NSObject

	readonly analysisServiceURL: NSURL;

	readonly asyncClosestFacilityServiceURL: NSURL;

	readonly asyncLocationAllocationServiceURL: NSURL;

	readonly asyncODCostMatrixServiceURL: NSURL;

	readonly asyncServiceAreaServiceURL: NSURL;

	readonly asyncVRPServiceURL: NSURL;

	readonly closestFacilityServiceURL: NSURL;

	readonly defaultElevationServices: NSArray<AGSElevationServiceInfo>;

	readonly elevation3DServiceURL: NSURL;

	readonly elevationServiceURL: NSURL;

	readonly elevationSyncServiceURL: NSURL;

	readonly geocodeServiceURLs: NSArray<NSURL>;

	readonly geoenrichmentServiceURL: NSURL;

	readonly geometryServiceURL: NSURL;

	readonly hydrologyServiceURL: NSURL;

	readonly locationTrackingServiceURL: NSURL;

	readonly printTaskURL: NSURL;

	readonly routeServiceURL: NSURL;

	readonly serviceAreaServiceURL: NSURL;

	readonly syncVRPServiceURL: NSURL;

	readonly trafficServiceURL: NSURL;
}

declare class AGSPortalInfo extends AGSObject implements AGSJSONSerializable {

	static alloc(): AGSPortalInfo; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static fromJSONWithPortalError(JSONObject: any, portal: AGSPortal): AGSPortalInfo;

	static new(): AGSPortalInfo; // inherited from NSObject

	readonly IPCountryCode: string;

	readonly access: AGSPortalAccess;

	readonly allSSL: boolean;

	readonly basemapGalleryGroupQuery: string;

	readonly bingKey: string;

	readonly canSearchPublic: boolean;

	readonly canShareBingPublic: boolean;

	readonly canSharePublic: boolean;

	readonly commentsEnabled: boolean;

	readonly created: Date;

	readonly customBaseDomain: string;

	readonly defaultBasemap: AGSBasemap;

	readonly defaultExtent: AGSEnvelope;

	readonly defaultVectorBasemap: AGSBasemap;

	readonly featuredGroupsQueries: NSArray<string>;

	readonly featuredItemsGroupQuery: string;

	readonly helperServices: AGSPortalHelperServices;

	readonly homePageFeaturedContentCount: number;

	readonly homePageFeaturedContentGroupQuery: string;

	readonly isPortal: boolean;

	readonly licenseInfo: AGSLicenseInfo;

	readonly livingAtlasGroupQuery: string;

	readonly locale: NSLocale;

	readonly modified: Date;

	readonly organizationBanner: AGSLoadableImage;

	readonly organizationDescription: string;

	readonly organizationID: string;

	readonly organizationName: string;

	readonly organizationSubdomain: string;

	readonly portal: AGSPortal;

	readonly portalMode: AGSPortalMode;

	readonly portalName: string;

	readonly portalThumbnail: AGSLoadableImage;

	readonly showHomePageDescription: boolean;

	readonly supportsOAuth: boolean;

	readonly thumbnail: AGSLoadableImage;

	readonly useVectorBasemaps: boolean;

	readonly vectorBasemapGalleryGroupQuery: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare class AGSPortalItem extends AGSItem implements AGSJSONSerializable, AGSLoadable {

	static alloc(): AGSPortalItem; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static fromJSONWithPortalError(JSONObject: any, portal: AGSPortal): AGSPortalItem;

	static new(): AGSPortalItem; // inherited from NSObject

	static portalItemWithPortal(portal: AGSPortal): AGSPortalItem;

	static portalItemWithPortalItemID(portal: AGSPortal, itemID: string): AGSPortalItem;

	static portalItemWithPortalType(portal: AGSPortal, type: AGSPortalItemType): AGSPortalItem;

	static portalItemWithURL(URL: NSURL): AGSPortalItem;

	readonly GUID: string;

	readonly access: AGSPortalAccess;

	accessAndUseConstraintsHtml: string;

	readonly adminGroups: NSArray<AGSPortalGroup>;

	readonly averageRating: number;

	readonly commentCount: number;

	readonly comments: NSArray<AGSPortalItemComment>;

	readonly commentsEnabled: boolean;

	readonly folderID: string;

	readonly locale: NSLocale;

	readonly memberGroups: NSArray<AGSPortalGroup>;

	readonly otherGroups: NSArray<AGSPortalGroup>;

	owner: string;

	readonly portal: AGSPortal;

	readonly ratingCount: number;

	readonly serviceURL: NSURL;

	readonly size: number;

	type: AGSPortalItemType;

	readonly typeName: string;

	readonly userRating: AGSLoadableValue;

	readonly viewCount: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly loadError: NSError; // inherited from AGSLoadable

	readonly loadStatus: AGSLoadStatus; // inherited from AGSLoadable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { portal: AGSPortal; });

	constructor(o: { portal: AGSPortal; itemID: string; });

	constructor(o: { portal: AGSPortal; type: AGSPortalItemType; });

	constructor(o: { URL: NSURL; });

	addCommentCompletion(comment: string, completion: (p1: AGSPortalItemComment, p2: NSError) => void): AGSCancelable;

	addRatingCompletion(rating: number, completion: (p1: NSError) => void): AGSCancelable;

	cancelLoad(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fetchCommentsWithCompletion(completion: (p1: NSArray<AGSPortalItemComment>, p2: NSError) => void): AGSCancelable;

	fetchGroupsWithCompletion(completion: (p1: NSArray<AGSPortalGroup>, p2: NSArray<AGSPortalGroup>, p3: NSArray<AGSPortalGroup>, p4: NSError) => void): AGSCancelable;

	initWithPortal(portal: AGSPortal): this;

	initWithPortalItemID(portal: AGSPortal, itemID: string): this;

	initWithPortalType(portal: AGSPortal, type: AGSPortalItemType): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadWithCompletion(completion: (p1: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retryLoadWithCompletion(completion: (p1: NSError) => void): void;

	self(): this;

	shareWithEveryoneOrgCompletion(everyone: boolean, org: boolean, completion: (p1: NSError) => void): AGSCancelable;

	shareWithGroupsCompletion(groups: NSArray<AGSPortalGroup> | AGSPortalGroup[], completion: (p1: NSArray<AGSPortalGroup>, p2: NSError) => void): AGSCancelable;

	toJSON(): any;

	unshareWithCompletion(completion: (p1: NSError) => void): AGSCancelable;

	unshareWithGroupsCompletion(groups: NSArray<AGSPortalGroup> | AGSPortalGroup[], completion: (p1: NSArray<AGSPortalGroup>, p2: NSError) => void): AGSCancelable;

	updateDataCompletion(data: NSData, completion: (p1: NSError) => void): AGSCancelable;

	updateDataWithJSONCompletion(json: any, completion: (p1: NSError) => void): AGSCancelable;
}

declare class AGSPortalItemComment extends NSObject {

	static alloc(): AGSPortalItemComment; // inherited from NSObject

	static new(): AGSPortalItemComment; // inherited from NSObject

	readonly comment: string;

	readonly commentID: string;

	readonly created: Date;

	readonly owner: string;
}

declare class AGSPortalItemContentParameters extends NSObject {

	static alloc(): AGSPortalItemContentParameters; // inherited from NSObject

	static new(): AGSPortalItemContentParameters; // inherited from NSObject

	static portalItemContentParametersWithDataFilename(data: NSData, filename: string): AGSPortalItemContentParameters;

	static portalItemContentParametersWithJSON(JSONObject: any): AGSPortalItemContentParameters;

	static portalItemContentParametersWithURL(URL: NSURL): AGSPortalItemContentParameters;

	readonly filename: string;

	readonly value: NSObjectProtocol;
}

declare const enum AGSPortalItemType {

	Unknown = -1,

	ArcGISProAddIn = 0,

	ArcPadPackage = 1,

	CADDrawing = 2,

	CSV = 3,

	CityEngineWebScene = 4,

	CodeAttachment = 5,

	CodeSample = 6,

	ColorSet = 7,

	DesktopAddIn = 8,

	DesktopApplication = 9,

	DesktopApplicationTemplate = 10,

	DesktopStyle = 11,

	DocumentLink = 12,

	ExplorerAddIn = 13,

	ExplorerLayer = 14,

	ExplorerMap = 15,

	FeatureCollection = 16,

	FeatureCollectionTemplate = 17,

	FeatureService = 18,

	FileGeodatabase = 19,

	Form = 20,

	GeocodingService = 21,

	GeodataService = 22,

	GeometryService = 23,

	GeoprocessingPackage = 24,

	GeoprocessingPackageProVersion = 25,

	GeoprocessingSample = 26,

	GeoprocessingService = 27,

	GlobeDocument = 28,

	GlobeService = 29,

	Image = 30,

	ImageCollection = 31,

	ImageService = 32,

	InsightsModel = 33,

	InsightsPage = 34,

	InsightsWorkbook = 35,

	iWorkKeynote = 36,

	iWorkNumbers = 37,

	iWorkPages = 38,

	IWorkKeynote = 36,

	IWorkNumbers = 37,

	IWorkPages = 38,

	KML = 39,

	KMLCollection = 40,

	Layer = 41,

	LayerPackage = 42,

	Layout = 43,

	LocatorPackage = 44,

	MapDocument = 45,

	MapPackage = 46,

	MapService = 47,

	MapTemplate = 48,

	MicrosoftExcel = 49,

	MicrosoftPowerpoint = 50,

	MicrosoftWord = 51,

	MobileApplication = 52,

	MobileBasemapPackage = 53,

	MobileMapPackage = 54,

	NativeApplication = 55,

	NativeApplicationInstaller = 56,

	NativeApplicationTemplate = 57,

	NetCDF = 58,

	NetworkAnalysisService = 59,

	OperationView = 60,

	OperationsDashboardAddIn = 61,

	OperationsDashboardExtension = 62,

	PDF = 63,

	ProjectPackage = 64,

	ProjectTemplate = 65,

	ProMap = 66,

	PublishedMap = 67,

	RasterFunctionTemplate = 68,

	RelationalDatabaseConnection = 69,

	ReportTemplate = 70,

	RulePackage = 71,

	SceneDocument = 72,

	ScenePackage = 73,

	SceneService = 74,

	ServiceDefinition = 75,

	ShapeFile = 76,

	StatisticalDataCollection = 77,

	SymbolSet = 78,

	TaskFile = 79,

	TilePackage = 80,

	VectorTilePackage = 81,

	VectorTileService = 82,

	VisioDocument = 83,

	Vr360Experience = 84,

	WFS = 85,

	WMS = 86,

	WMTS = 87,

	WebMap = 88,

	WebMappingApplication = 89,

	WebScene = 90,

	WindowsMobilePackage = 91,

	WorkflowManagerPackage = 92,

	WorkflowManagerService = 93,

	WorkforceProject = 94,

	SQLiteGeodatabase = 95,

	MapArea = 96,

	HubInitiative = 97,

	HubSiteApplication = 98,

	HubPage = 99,

	AppBuilderExtension = 100,

	AppBuilderWidgetPackage = 101,

	Dashboard = 102,

	ArcGISProConfiguration = 103,

	ContentCategorySet = 104,

	InsightsTheme = 105,

	MobileScenePackage = 106,

	OrientedImageryCatalog = 107,

	OrthoMappingProject = 108,

	OrthoMappingTemplate = 109,

	Solution = 110,

	BuildingSceneLayer = 111,

	CompactTilePackage = 112,

	DataStore = 113,

	DeepLearningPackage = 114,

	ExcaliburImageryProject = 115,

	GeoPackage = 116,

	Mission = 117,

	SiteApplication = 118,

	SitePage = 119,

	BigDataAnalytic = 120,

	Feed = 121,

	RealTimeAnalytic = 122,

	ProReport = 123,

	QuickCaptureProject = 124,

	Survey123AddIn = 125,

	UrbanModel = 126,

	WebExperience = 127
}

declare const enum AGSPortalLoginType {

	OAuth = 0,

	ClientCertificate = 1,

	UsernamePassword = 2,

	Unknown = 3
}

declare const enum AGSPortalMode {

	SingleTenant = 0,

	MultiTenant = 1
}

declare class AGSPortalPrivilege extends NSObject {

	static alloc(): AGSPortalPrivilege; // inherited from NSObject

	static new(): AGSPortalPrivilege; // inherited from NSObject

	readonly realm: AGSPortalPrivilegeRealm;

	readonly role: AGSPortalPrivilegeRole;

	readonly type: AGSPortalPrivilegeType;

	readonly typeName: string;
}

declare const enum AGSPortalPrivilegeRealm {

	Unknown = 0,

	Features = 1,

	Marketplace = 2,

	OpenData = 3,

	Portal = 4,

	Premium = 5
}

declare const enum AGSPortalPrivilegeRole {

	Unknown = 0,

	User = 1,

	Admin = 2,

	Publisher = 3
}

declare const enum AGSPortalPrivilegeType {

	Unknown = 0,

	Edit = 1,

	FullEdit = 2,

	Manage = 3,

	Purchase = 4,

	StartTrial = 5,

	DesignateGroup = 6,

	OpenDataAdmin = 7,

	AssignToGroups = 8,

	ChangeUserRoles = 9,

	DeleteGroups = 10,

	DeleteItems = 11,

	DeleteUsers = 12,

	DisableUsers = 13,

	InviteUsers = 14,

	ManageEnterpriseGroups = 15,

	ManageLicenses = 16,

	ReassignGroups = 17,

	ReassignItems = 18,

	ReassignUsers = 19,

	UpdateGroups = 20,

	UpdateItems = 21,

	UpdateUsers = 22,

	ViewGroups = 23,

	ViewItems = 24,

	ViewUsers = 25,

	PublishFeatures = 26,

	PublishScenes = 27,

	PublishTiles = 28,

	CreateGroup = 29,

	CreateItem = 30,

	JoinGroup = 31,

	JoinNonOrgGroup = 32,

	ShareGroupToOrg = 33,

	ShareGroupToPublic = 34,

	ShareToGroup = 35,

	ShareToOrg = 36,

	ShareToPublic = 37,

	Demographics = 38,

	Elevation = 39,

	Geocode = 40,

	GeoEnrichment = 41,

	NetworkAnalysis = 42,

	SpatialAnalysis = 43,

	CreateUpdateCapableGroup = 44,

	ViewOrgGroups = 45,

	ViewOrgItems = 46,

	ViewOrgUsers = 47,

	GeoAnalytics = 48,

	RasterAnalysis = 49,

	PublishServerGPServices = 50,

	PublishServerServices = 51,

	UpdateItemCategorySchema = 52,

	FeatureReport = 53,

	ManageCollaborations = 54,

	ManageCredits = 55,

	ManageRoles = 56,

	ManageSecurity = 57,

	ManageServers = 58,

	ManageUtilityServices = 59,

	ManageWebsite = 60,

	ManageReplications = 61,

	CreateNotebooks = 62,

	CreateAdvancedNotebooks = 63,

	BulkPublishFromDataStores = 64,

	EnumerateDataStores = 65,

	RegisterDataStores = 66,

	CategorizeItems = 67,

	ViewTracks = 68
}

declare class AGSPortalQueryParameters extends AGSJSONSerializableBase {

	static alloc(): AGSPortalQueryParameters; // inherited from NSObject

	static new(): AGSPortalQueryParameters; // inherited from NSObject

	static queryParametersForGroupsWithOwnerTitle(username: string, title: string): AGSPortalQueryParameters;

	static queryParametersForItemWithID(itemID: string): AGSPortalQueryParameters;

	static queryParametersForItemsInGroup(groupID: string): AGSPortalQueryParameters;

	static queryParametersForItemsOfTypeInGroup(type: AGSPortalItemType, groupID: string): AGSPortalQueryParameters;

	static queryParametersForItemsOfTypeInGroupWithSearchString(type: AGSPortalItemType, groupID: string, searchString: string): AGSPortalQueryParameters;

	static queryParametersForItemsOfTypeOwnerSearchString(type: AGSPortalItemType, username: string, searchString: string): AGSPortalQueryParameters;

	static queryParametersForItemsOfTypeWithSearchString(type: AGSPortalItemType, searchString: string): AGSPortalQueryParameters;

	static queryParametersForItemsOfTypesOwnerGroupIDSearchString(types: NSArray<NSValue> | NSValue[], owner: string, groupID: string, searchString: string): AGSPortalQueryParameters;

	static queryParametersForItemsWithOwnerSearchString(username: string, searchString: string): AGSPortalQueryParameters;

	static queryParametersWithQuery(query: string): AGSPortalQueryParameters;

	static queryParametersWithQueryLimit(query: string, limit: number): AGSPortalQueryParameters;

	boundingBox: AGSEnvelope;

	categories: NSArray<string>;

	limit: number;

	query: string;

	searchPublic: boolean;

	sortField: string;

	sortOrder: AGSPortalQuerySortOrder;

	startIndex: number;

	constructor(o: { query: string; });

	constructor(o: { query: string; limit: number; });

	initWithQuery(query: string): this;

	initWithQueryLimit(query: string, limit: number): this;
}

declare class AGSPortalQueryResultSet extends NSObject {

	static alloc(): AGSPortalQueryResultSet; // inherited from NSObject

	static new(): AGSPortalQueryResultSet; // inherited from NSObject

	readonly nextQueryParameters: AGSPortalQueryParameters;

	readonly queryParameters: AGSPortalQueryParameters;

	readonly results: NSArray<any>;

	readonly totalResults: number;
}

declare const enum AGSPortalQuerySortOrder {

	Ascending = 0,

	Descending = 1
}

declare class AGSPortalUser extends AGSLoadableBase implements AGSJSONSerializable {

	static alloc(): AGSPortalUser; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static fromJSONWithPortalError(JSONObject: any, portal: AGSPortal): AGSPortalUser;

	static new(): AGSPortalUser; // inherited from NSObject

	readonly access: AGSPortalAccess;

	readonly created: Date;

	readonly email: string;

	readonly favoritesGroupID: string;

	readonly fullName: string;

	readonly groups: NSArray<AGSPortalGroup>;

	readonly modified: Date;

	readonly organizationID: string;

	readonly portal: AGSPortal;

	readonly privileges: NSArray<AGSPortalPrivilege>;

	readonly role: AGSPortalUserRole;

	readonly tags: NSArray<string>;

	readonly thumbnail: AGSLoadableImage;

	readonly units: AGSUnitSystem;

	readonly userDescription: string;

	readonly username: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { portal: AGSPortal; username: string; });

	addPortalItemWithContentParametersToFolderCompletion(portalItem: AGSPortalItem, contentParameters: AGSPortalItemContentParameters, folder: AGSPortalFolder, completion: (p1: NSError) => void): AGSCancelable;

	addToFavoritesCompletion(item: AGSPortalItem, completion: (p1: NSError) => void): AGSCancelable;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createFolderCompletion(title: string, completion: (p1: AGSPortalFolder, p2: NSError) => void): AGSCancelable;

	deleteFolderCompletion(folder: AGSPortalFolder, completion: (p1: NSError) => void): AGSCancelable;

	deletePortalItemCompletion(portalItem: AGSPortalItem, completion: (p1: NSError) => void): AGSCancelable;

	fetchContentInFolderCompletion(folderID: string, completion: (p1: NSArray<AGSPortalItem>, p2: NSError) => void): AGSCancelable;

	fetchContentWithCompletion(completion: (p1: NSArray<AGSPortalItem>, p2: NSArray<AGSPortalFolder>, p3: NSError) => void): AGSCancelable;

	fetchFavoriteStatusCompletion(item: AGSPortalItem, completion: (p1: boolean, p2: NSError) => void): AGSCancelable;

	initWithPortalUsername(portal: AGSPortal, username: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	movePortalItemToFolderCompletion(portalItem: AGSPortalItem, folder: AGSPortalFolder, completion: (p1: NSError) => void): AGSCancelable;

	movePortalItemsToFolderCompletion(portalItems: NSArray<AGSPortalItem> | AGSPortalItem[], folder: AGSPortalFolder, completion: (p1: NSDictionary<string, NSError>, p2: NSError) => void): AGSCancelable;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeFromFavoritesCompletion(item: AGSPortalItem, completion: (p1: NSError) => void): AGSCancelable;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare const enum AGSPortalUserRole {

	Unknown = 0,

	User = 1,

	Publisher = 2,

	Admin = 3
}

declare class AGSPreplannedMapArea extends AGSLoadableBase {

	static alloc(): AGSPreplannedMapArea; // inherited from NSObject

	static new(): AGSPreplannedMapArea; // inherited from NSObject

	static preplannedMapAreaWithPortalItem(portalItem: AGSPortalItem): AGSPreplannedMapArea;

	readonly areaOfInterest: AGSGeometry;

	readonly portalItem: AGSPortalItem;

	readonly updateCapabilities: AGSOfflineMapUpdateCapabilities;

	constructor(o: { portalItem: AGSPortalItem; });

	getContentItemsWithCompletion(completion: (p1: NSArray<AGSPortalItem>, p2: NSError) => void): AGSCancelable;

	initWithPortalItem(portalItem: AGSPortalItem): this;
}

declare const enum AGSPreplannedScheduledUpdatesOption {

	NoUpdates = 0,

	DownloadAllUpdates = 1
}

declare const enum AGSPreplannedUpdateMode {

	NoUpdates = 0,

	SyncWithFeatureServices = 1,

	DownloadScheduledUpdates = 2
}

declare const enum AGSPresetColorRampType {

	None = -1,

	Elevation = 0,

	DEMScreen = 1,

	DEMLight = 2
}

declare class AGSProximityResult extends AGSObject {

	static alloc(): AGSProximityResult; // inherited from NSObject

	static new(): AGSProximityResult; // inherited from NSObject

	readonly distance: number;

	readonly partIndex: number;

	readonly point: AGSPoint;

	readonly pointIndex: number;
}

declare const enum AGSQueryFeatureFields {

	IDsOnly = 0,

	Minimum = 1,

	LoadAll = 2
}

declare class AGSQueryParameters extends AGSObject {

	static alloc(): AGSQueryParameters; // inherited from NSObject

	static new(): AGSQueryParameters; // inherited from NSObject

	static queryParameters(): AGSQueryParameters;

	geometry: AGSGeometry;

	maxAllowableOffset: number;

	maxFeatures: number;

	objectIDs: NSArray<number>;

	orderByFields: NSArray<AGSOrderBy>;

	outSpatialReference: AGSSpatialReference;

	resultOffset: number;

	returnGeometry: boolean;

	spatialRelationship: AGSSpatialRelationship;

	timeExtent: AGSTimeExtent;

	whereClause: string;
}

declare class AGSRGBRenderer extends AGSBaseStretchRenderer {

	static RGBRendererWithStretchParametersBandIndexesGammasEstimateStatistics(stretchParameters: AGSStretchParameters, bandIndexes: NSArray<number> | number[], gammas: NSArray<number> | number[], estimateStatistics: boolean): AGSRGBRenderer;

	static RGBRendererWithStretchParametersBandIndexesGammasEstimateStatisticsPansharpenTypePanchromaticRasterWeights(stretchParameters: AGSStretchParameters, bandIndexes: NSArray<number> | number[], gammas: NSArray<number> | number[], estimateStatistics: boolean, pansharpenType: AGSPansharpenType, panchromaticRaster: AGSRaster, weights: NSArray<number> | number[]): AGSRGBRenderer;

	static alloc(): AGSRGBRenderer; // inherited from NSObject

	static baseStretchRenderer(): AGSRGBRenderer; // inherited from AGSBaseStretchRenderer

	static new(): AGSRGBRenderer; // inherited from NSObject

	static rasterRenderer(): AGSRGBRenderer; // inherited from AGSRasterRenderer

	readonly bandIndexes: NSArray<number>;

	readonly panchromaticRaster: AGSRaster;

	readonly pansharpenType: AGSPansharpenType;

	readonly weights: NSArray<number>;

	constructor(o: { stretchParameters: AGSStretchParameters; bandIndexes: NSArray<number> | number[]; gammas: NSArray<number> | number[]; estimateStatistics: boolean; });

	constructor(o: { stretchParameters: AGSStretchParameters; bandIndexes: NSArray<number> | number[]; gammas: NSArray<number> | number[]; estimateStatistics: boolean; pansharpenType: AGSPansharpenType; panchromaticRaster: AGSRaster; weights: NSArray<number> | number[]; });

	initWithStretchParametersBandIndexesGammasEstimateStatistics(stretchParameters: AGSStretchParameters, bandIndexes: NSArray<number> | number[], gammas: NSArray<number> | number[], estimateStatistics: boolean): this;

	initWithStretchParametersBandIndexesGammasEstimateStatisticsPansharpenTypePanchromaticRasterWeights(stretchParameters: AGSStretchParameters, bandIndexes: NSArray<number> | number[], gammas: NSArray<number> | number[], estimateStatistics: boolean, pansharpenType: AGSPansharpenType, panchromaticRaster: AGSRaster, weights: NSArray<number> | number[]): this;
}

declare class AGSRangeDomain extends AGSDomain {

	static alloc(): AGSRangeDomain; // inherited from NSObject

	static new(): AGSRangeDomain; // inherited from NSObject

	readonly maxValue: any;

	readonly minValue: any;
}

declare class AGSRaster extends AGSLoadableBase {

	static alloc(): AGSRaster; // inherited from NSObject

	static new(): AGSRaster; // inherited from NSObject

	static rasterWithFileURL(fileURL: NSURL): AGSRaster;

	static rasterWithNameExtension(name: string, extension: string): AGSRaster;

	static rasterWithRasterFunction(rasterFunction: AGSRasterFunction): AGSRaster;

	readonly fileURL: NSURL;

	readonly function: AGSRasterFunction;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { name: string; extension: string; });

	constructor(o: { rasterFunction: AGSRasterFunction; });

	initWithFileURL(fileURL: NSURL): this;

	initWithNameExtension(name: string, extension: string): this;

	initWithRasterFunction(rasterFunction: AGSRasterFunction): this;
}

declare class AGSRasterElevationSource extends AGSElevationSource {

	static alloc(): AGSRasterElevationSource; // inherited from NSObject

	static new(): AGSRasterElevationSource; // inherited from NSObject

	static rasterElevationSource(): AGSRasterElevationSource;

	static rasterElevationSourceWithFileURLs(fileURLs: NSArray<NSURL> | NSURL[]): AGSRasterElevationSource;

	readonly fileURLs: NSArray<NSURL>;

	readonly fullExtent: AGSEnvelope;

	constructor(o: { fileURLs: NSArray<NSURL> | NSURL[]; });

	initWithFileURLs(fileURLs: NSArray<NSURL> | NSURL[]): this;
}

declare class AGSRasterFunction extends AGSObject {

	static alloc(): AGSRasterFunction; // inherited from NSObject

	static fromJSONError(json: string): any;

	static new(): AGSRasterFunction; // inherited from NSObject

	static rasterFunctionWithFileURL(fileURL: NSURL): AGSRasterFunction;

	readonly arguments: AGSRasterFunctionArguments;

	readonly fileURL: NSURL;

	constructor(o: { fileURL: NSURL; });

	initWithFileURL(fileURL: NSURL): this;
}

declare class AGSRasterFunctionArguments extends AGSObject {

	static alloc(): AGSRasterFunctionArguments; // inherited from NSObject

	static new(): AGSRasterFunctionArguments; // inherited from NSObject

	static rasterFunctionArguments(): AGSRasterFunctionArguments;

	readonly argumentNames: NSArray<string>;

	readonly rasterNames: NSArray<string>;

	setArgumentWithName(argument: string, name: string): void;

	setRasterWithName(raster: AGSRaster, name: string): void;
}

declare class AGSRasterLayer extends AGSImageAdjustmentLayer implements AGSPopupSource, AGSTimeAware {

	static alloc(): AGSRasterLayer; // inherited from NSObject

	static new(): AGSRasterLayer; // inherited from NSObject

	static rasterLayerWithItem(item: AGSItem): AGSRasterLayer;

	static rasterLayerWithRaster(raster: AGSRaster): AGSRasterLayer;

	readonly raster: AGSRaster;

	renderer: AGSRasterRenderer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fullTimeExtent: AGSTimeExtent; // inherited from AGSTimeAware

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	popupDefinition: AGSPopupDefinition; // inherited from AGSPopupSource

	popupEnabled: boolean; // inherited from AGSPopupSource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly supportsTimeFiltering: boolean; // inherited from AGSTimeAware

	timeFilteringEnabled: boolean; // inherited from AGSTimeAware

	readonly timeInterval: AGSTimeValue; // inherited from AGSTimeAware

	timeOffset: AGSTimeValue; // inherited from AGSTimeAware

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { raster: AGSRaster; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItem(item: AGSItem): this;

	initWithRaster(raster: AGSRaster): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSRasterRenderer extends AGSObject {

	static alloc(): AGSRasterRenderer; // inherited from NSObject

	static new(): AGSRasterRenderer; // inherited from NSObject

	static rasterRenderer(): AGSRasterRenderer;
}

declare class AGSRasterSublayerSource extends AGSSublayerSource {

	static alloc(): AGSRasterSublayerSource; // inherited from NSObject

	static new(): AGSRasterSublayerSource; // inherited from NSObject

	static rasterSublayerSourceWithWorkspaceIDDataSourceName(workspaceID: string, dataSourceName: string): AGSRasterSublayerSource;

	readonly dataSourceName: string;

	readonly workspaceID: string;

	constructor(o: { workspaceID: string; dataSourceName: string; });

	initWithWorkspaceIDDataSourceName(workspaceID: string, dataSourceName: string): this;
}

declare class AGSRelatedFeatureQueryResult extends AGSObject implements AGSFeatureSet {

	static alloc(): AGSRelatedFeatureQueryResult; // inherited from NSObject

	static new(): AGSRelatedFeatureQueryResult; // inherited from NSObject

	readonly feature: AGSArcGISFeature;

	readonly relatedTable: AGSArcGISFeatureTable;

	readonly relationshipInfo: AGSRelationshipInfo;

	readonly transferLimitExceeded: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fields: NSArray<AGSField>; // inherited from AGSFeatureSet

	readonly geometryType: AGSGeometryType; // inherited from AGSFeatureSet

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly spatialReference: AGSSpatialReference; // inherited from AGSFeatureSet

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	featureEnumerator(): AGSFeatureEnumerator;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSRelatedQueryParameters extends AGSObject {

	static alloc(): AGSRelatedQueryParameters; // inherited from NSObject

	static new(): AGSRelatedQueryParameters; // inherited from NSObject

	static relatedQueryParametersWithRelationshipInfo(relationshipInfo: AGSRelationshipInfo): AGSRelatedQueryParameters;

	maxFeatures: number;

	orderByFields: NSArray<AGSOrderBy>;

	relationshipInfo: AGSRelationshipInfo;

	resultOffset: number;

	returnGeometry: boolean;

	whereClause: string;

	constructor(o: { relationshipInfo: AGSRelationshipInfo; });

	initWithRelationshipInfo(relationshipInfo: AGSRelationshipInfo): this;
}

declare const enum AGSRelationshipCardinality {

	ManyToMany = 0,

	OneToMany = 1,

	OneToOne = 2,

	Unknown = -1
}

declare const enum AGSRelationshipConstraintViolationType {

	None = 0,

	Cardinality = 1,

	Orphaned = 2
}

declare class AGSRelationshipInfo extends AGSObject {

	static alloc(): AGSRelationshipInfo; // inherited from NSObject

	static new(): AGSRelationshipInfo; // inherited from NSObject

	readonly cardinality: AGSRelationshipCardinality;

	readonly composite: boolean;

	readonly keyField: string;

	readonly name: string;

	readonly relatedTableID: number;

	readonly relationshipInfoID: number;

	readonly role: AGSRelationshipRole;
}

declare const enum AGSRelationshipRole {

	Destination = 0,

	Origin = 1,

	Unknown = -1
}

interface AGSRemoteResource extends NSObjectProtocol {

	URL: NSURL;

	credential: AGSCredential;

	requestConfiguration: AGSRequestConfiguration;
}
declare var AGSRemoteResource: {

	prototype: AGSRemoteResource;
};

declare class AGSRenderer extends AGSObject implements AGSJSONSerializable, NSCopying {

	static alloc(): AGSRenderer; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSRenderer; // inherited from NSObject

	rotationExpression: string;

	rotationType: AGSSymbolRotationType;

	sceneProperties: AGSRendererSceneProperties;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqual(object: any): boolean;

	isEqualToRenderer(other: AGSRenderer): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	symbolForFeature(feature: AGSFeature): AGSSymbol;

	symbolForFeatureApplyAttributeOverrides(feature: AGSFeature, applyAttributeOverrides: boolean): AGSSymbol;

	symbolForGraphic(graphic: AGSGraphic): AGSSymbol;

	symbolForGraphicApplyAttributeOverrides(graphic: AGSGraphic, applyAttributeOverrides: boolean): AGSSymbol;

	toJSON(): any;
}

declare const enum AGSRendererClassificationMethod {

	DefinedInterval = 0,

	EqualInterval = 1,

	GeometricalInterval = 2,

	NaturalBreaks = 3,

	Quantile = 4,

	StandardDeviation = 5,

	Manual = 6
}

declare const enum AGSRendererNormalizationType {

	ByField = 0,

	ByLog = 1,

	ByPercentOfTotal = 2,

	None = 3,

	Unknown = -1
}

declare class AGSRendererSceneProperties extends AGSObject {

	static alloc(): AGSRendererSceneProperties; // inherited from NSObject

	static new(): AGSRendererSceneProperties; // inherited from NSObject

	static rendererSceneProperties(): AGSRendererSceneProperties;

	static rendererScenePropertiesWithExtrusionExpressionExtrusionMode(extrusionExpression: string, extrusionMode: AGSExtrusionMode): AGSRendererSceneProperties;

	static rendererScenePropertiesWithHeadingExpressionPitchExpressionRollExpression(headingExpression: string, pitchExpression: string, rollExpression: string): AGSRendererSceneProperties;

	extrusionExpression: string;

	extrusionMode: AGSExtrusionMode;

	headingExpression: string;

	pitchExpression: string;

	rollExpression: string;

	constructor(o: { extrusionExpression: string; extrusionMode: AGSExtrusionMode; });

	constructor(o: { headingExpression: string; pitchExpression: string; rollExpression: string; });

	initWithExtrusionExpressionExtrusionMode(extrusionExpression: string, extrusionMode: AGSExtrusionMode): this;

	initWithHeadingExpressionPitchExpressionRollExpression(headingExpression: string, pitchExpression: string, rollExpression: string): this;
}

declare class AGSRenderingRule extends AGSObject {

	static alloc(): AGSRenderingRule; // inherited from NSObject

	static new(): AGSRenderingRule; // inherited from NSObject

	static renderingRuleWithRenderingRuleInfo(renderingRuleInfo: AGSRenderingRuleInfo): AGSRenderingRule;

	static renderingRuleWithRenderingRuleJSON(renderingRuleJSON: string): AGSRenderingRule;

	readonly renderingRuleInfo: AGSRenderingRuleInfo;

	readonly renderingRuleJSON: NSDictionary<string, any>;

	constructor(o: { renderingRuleInfo: AGSRenderingRuleInfo; });

	constructor(o: { renderingRuleJSON: NSDictionary<string, any>; });

	initWithRenderingRuleInfo(renderingRuleInfo: AGSRenderingRuleInfo): this;

	initWithRenderingRuleJSON(renderingRuleJSON: NSDictionary<string, any>): this;
}

declare class AGSRenderingRuleInfo extends AGSObject {

	static alloc(): AGSRenderingRuleInfo; // inherited from NSObject

	static new(): AGSRenderingRuleInfo; // inherited from NSObject

	static renderingRuleInfoWithName(name: string): AGSRenderingRuleInfo;

	readonly help: string;

	readonly infoDescription: string;

	readonly name: string;

	constructor(o: { name: string; });

	initWithName(name: string): this;
}

declare class AGSRequestConfiguration extends NSObject implements NSCopying {

	static additionalUserAgentInfo(): string;

	static alloc(): AGSRequestConfiguration; // inherited from NSObject

	static globalConfiguration(): AGSRequestConfiguration;

	static new(): AGSRequestConfiguration; // inherited from NSObject

	static setAdditionalUserAgentInfo(additionalInfo: string): void;

	static setGlobalConfiguration(globalConfiguration: AGSRequestConfiguration): void;

	allowsBackgroundSessionForDownloads: boolean;

	allowsCellularAccessForDownloads: boolean;

	backgroundTimeoutInterval: number;

	debugLogDeleteBeforeEachRun: boolean;

	debugLogFileURL: NSURL;

	debugLogIgnoreTiledLayerRequests: boolean;

	debugLogIncludeRequestHeaders: boolean;

	debugLogIncludeResponseHeaders: boolean;

	debugLogIncludeTimestamp: boolean;

	debugLogRequests: boolean;

	debugLogResponseTrimThreshold: number;

	debugLogResponses: boolean;

	forcePost: boolean;

	requestCachePolicy: NSURLRequestCachePolicy;

	shouldCacheResponse: boolean;

	shouldIssueAuthenticationChallenge: (p1: AGSAuthenticationChallenge) => boolean;

	timeoutInterval: number;

	userHeaders: NSDictionary<string, string>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum AGSRequestHTTPMethod {

	Get = 0,

	PostFormEncodeParameters = 1,

	PostJSON = 2
}

declare class AGSRequestOperation extends AGSObservableOperation implements AGSCancelable, NSProgressReporting {

	static alloc(): AGSRequestOperation; // inherited from NSObject

	static new(): AGSRequestOperation; // inherited from NSObject

	readonly URL: NSURL;

	cancelSessionWhenOperationIsCanceled: boolean;

	credential: AGSCredential;

	loadDependency: AGSLoadable;

	method: AGSRequestHTTPMethod;

	outputFileURL: NSURL;

	progressHandler: (p1: number, p2: number) => void;

	readonly queryParameters: NSDictionary<string, any>;

	readonly remoteResource: AGSRemoteResource;

	readonly request: NSURLRequest;

	requestConfiguration: AGSRequestConfiguration;

	readonly response: NSURLResponse;

	sessionID: string;

	readonly totalBytesDownloaded: number;

	readonly totalBytesExpected: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly progress: NSProgress; // inherited from NSProgressReporting

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { remoteResource: AGSRemoteResource; request: NSURLRequest; });

	constructor(o: { remoteResource: AGSRemoteResource; URL: NSURL; queryParameters: NSDictionary<string, any>; });

	constructor(o: { remoteResource: AGSRemoteResource; URL: NSURL; queryParameters: NSDictionary<string, any>; method: AGSRequestHTTPMethod; });

	constructor(o: { URL: NSURL; });

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRemoteResourceRequest(remoteResource: AGSRemoteResource, request: NSURLRequest): this;

	initWithRemoteResourceURLQueryParameters(remoteResource: AGSRemoteResource, URL: NSURL, queryParameters: NSDictionary<string, any>): this;

	initWithRemoteResourceURLQueryParametersMethod(remoteResource: AGSRemoteResource, URL: NSURL, queryParameters: NSDictionary<string, any>, method: AGSRequestHTTPMethod): this;

	initWithURL(url: NSURL): this;

	isCanceled(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isPaused(): boolean;

	pause(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	resume(): void;

	retainCount(): number;

	self(): this;
}

declare const enum AGSReroutingStrategy {

	ToNextWaypoint = 0,

	ToNextStop = 1,

	ResequenceStopsOnly = 2
}

declare class AGSRestrictionAttribute extends AGSObject {

	static alloc(): AGSRestrictionAttribute; // inherited from NSObject

	static new(): AGSRestrictionAttribute; // inherited from NSObject

	readonly parameterValues: NSDictionary<string, any>;

	readonly restrictionUsageParameterName: string;
}

declare const enum AGSReturnLayerAttachmentOption {

	None = 0,

	AllLayers = 1,

	ReadOnlyLayers = 2,

	EditableLayers = 3
}

declare class AGSReverseGeocodeParameters extends AGSObject {

	static alloc(): AGSReverseGeocodeParameters; // inherited from NSObject

	static new(): AGSReverseGeocodeParameters; // inherited from NSObject

	static reverseGeocodeParameters(): AGSReverseGeocodeParameters;

	featureTypes: NSArray<string>;

	forStorage: boolean;

	maxDistance: number;

	maxResults: number;

	outputLanguageCode: string;

	outputSpatialReference: AGSSpatialReference;

	resultAttributeNames: NSArray<string>;
}

declare class AGSRoute extends AGSObject {

	static alloc(): AGSRoute; // inherited from NSObject

	static new(): AGSRoute; // inherited from NSObject

	readonly directionManeuvers: NSArray<AGSDirectionManeuver>;

	readonly endTime: Date;

	readonly endTimeShift: number;

	readonly routeGeometry: AGSPolyline;

	readonly routeName: string;

	readonly startTime: Date;

	readonly startTimeShift: number;

	readonly stops: NSArray<AGSStop>;

	readonly totalLength: number;

	readonly totalTime: number;

	readonly travelTime: number;

	readonly violationTime: number;

	readonly waitTime: number;

	costForCostAttribute(attributeName: string): number;
}

declare class AGSRouteParameters extends AGSObject implements NSCopying {

	static alloc(): AGSRouteParameters; // inherited from NSObject

	static new(): AGSRouteParameters; // inherited from NSObject

	static routeParameters(): AGSRouteParameters;

	accumulateAttributeNames: NSArray<string>;

	directionsDistanceUnits: AGSUnitSystem;

	directionsLanguage: string;

	directionsStyle: AGSDirectionsStyle;

	findBestSequence: boolean;

	outputSpatialReference: AGSSpatialReference;

	preserveFirstStop: boolean;

	preserveLastStop: boolean;

	returnDirections: boolean;

	returnPointBarriers: boolean;

	returnPolygonBarriers: boolean;

	returnPolylineBarriers: boolean;

	returnRoutes: boolean;

	returnStops: boolean;

	routeShapeType: AGSRouteShapeType;

	startTime: Date;

	travelMode: AGSTravelMode;

	clearPointBarriers(): void;

	clearPolygonBarriers(): void;

	clearPolylineBarriers(): void;

	clearStops(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	searchWhereClauseForSourceName(sourceName: string): string;

	setPointBarriers(pointBarriers: NSArray<AGSPointBarrier> | AGSPointBarrier[]): void;

	setPointBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setPolygonBarriers(polygonBarriers: NSArray<AGSPolygonBarrier> | AGSPolygonBarrier[]): void;

	setPolygonBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setPolylineBarriers(lineBarriers: NSArray<AGSPolylineBarrier> | AGSPolylineBarrier[]): void;

	setPolylineBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setSearchWhereClauseForSourceName(searchWhereClause: string, sourceName: string): void;

	setStops(stops: NSArray<AGSStop> | AGSStop[]): void;

	setStopsWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;
}

declare class AGSRouteResult extends AGSObject {

	static alloc(): AGSRouteResult; // inherited from NSObject

	static new(): AGSRouteResult; // inherited from NSObject

	readonly directionsLanguage: string;

	readonly messages: NSArray<string>;

	readonly pointBarriers: NSArray<AGSPointBarrier>;

	readonly polygonBarriers: NSArray<AGSPolygonBarrier>;

	readonly polylineBarriers: NSArray<AGSPolylineBarrier>;

	readonly routes: NSArray<AGSRoute>;
}

declare const enum AGSRouteShapeType {

	None = 0,

	StraightLine = 1,

	TrueShapeWithMeasures = 2
}

declare class AGSRouteTask extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSRouteTask; // inherited from NSObject

	static new(): AGSRouteTask; // inherited from NSObject

	static routeResultWithFeatureCollectionCompletion(featureCollection: AGSFeatureCollection, completion: (p1: AGSRouteResult, p2: NSError) => void): AGSCancelable;

	static routeResultWithPortalItemCompletion(portalItem: AGSPortalItem, completion: (p1: AGSRouteResult, p2: NSError) => void): AGSCancelable;

	static routeTaskWithDatabaseNameNetworkName(databaseName: string, networkName: string): AGSRouteTask;

	static routeTaskWithDataset(dataset: AGSTransportationNetworkDataset): AGSRouteTask;

	static routeTaskWithFileURLToDatabaseNetworkName(fileURLToDatabase: NSURL, networkName: string): AGSRouteTask;

	static routeTaskWithURL(URL: NSURL): AGSRouteTask;

	readonly transportationNetworkDataset: AGSTransportationNetworkDataset;

	constructor(o: { databaseName: string; networkName: string; });

	constructor(o: { dataset: AGSTransportationNetworkDataset; });

	constructor(o: { fileURLToDatabase: NSURL; networkName: string; });

	constructor(o: { URL: NSURL; });

	defaultRouteParametersWithCompletion(completion: (p1: AGSRouteParameters, p2: NSError) => void): AGSCancelable;

	initWithDatabaseNameNetworkName(databaseName: string, networkName: string): this;

	initWithDataset(dataset: AGSTransportationNetworkDataset): this;

	initWithFileURLToDatabaseNetworkName(fileURLToDatabase: NSURL, networkName: string): this;

	initWithURL(URL: NSURL): this;

	routeParametersWithFeatureCollectionCompletion(featureCollection: AGSFeatureCollection, completion: (p1: AGSRouteParameters, p2: NSError) => void): AGSCancelable;

	routeParametersWithPortalItemCompletion(portalItem: AGSPortalItem, completion: (p1: AGSRouteParameters, p2: NSError) => void): AGSCancelable;

	routeTaskInfo(): AGSRouteTaskInfo;

	solveRouteWithParametersCompletion(routeParameters: AGSRouteParameters, completion: (p1: AGSRouteResult, p2: NSError) => void): AGSCancelable;
}

declare class AGSRouteTaskInfo extends AGSObject {

	static alloc(): AGSRouteTaskInfo; // inherited from NSObject

	static new(): AGSRouteTaskInfo; // inherited from NSObject

	readonly accumulateAttributeNames: NSArray<string>;

	readonly costAttributes: NSDictionary<string, AGSCostAttribute>;

	readonly defaultTravelModeName: string;

	readonly directionsDistanceUnits: AGSUnitSystem;

	readonly directionsLanguage: string;

	readonly directionsStyle: AGSDirectionsStyle;

	readonly directionsSupport: AGSNetworkDirectionsSupport;

	readonly findBestSequence: boolean;

	readonly maxLocatingDistance: number;

	readonly networkName: string;

	readonly outputSpatialReference: AGSSpatialReference;

	readonly preserveFirstStop: boolean;

	readonly preserveLastStop: boolean;

	readonly restrictionAttributes: NSDictionary<string, AGSRestrictionAttribute>;

	readonly routeShapeType: AGSRouteShapeType;

	readonly startTime: Date;

	readonly supportedLanguages: NSArray<string>;

	readonly supportedRestrictionUsageParameterValues: NSArray<string>;

	readonly supportsRerouting: boolean;

	readonly travelModes: NSArray<AGSTravelMode>;
}

declare class AGSRouteTracker extends AGSObject {

	static alloc(): AGSRouteTracker; // inherited from NSObject

	static new(): AGSRouteTracker; // inherited from NSObject

	static routeTrackerWithRouteResultRouteIndex(routeResult: AGSRouteResult, routeIndex: number): AGSRouteTracker;

	delegate: AGSRouteTrackerDelegate;

	readonly reroutingEnabled: boolean;

	readonly trackingStatus: AGSTrackingStatus;

	voiceGuidanceUnitSystem: AGSUnitSystem;

	constructor(o: { routeResult: AGSRouteResult; routeIndex: number; });

	cancelRerouting(): void;

	disableRerouting(): void;

	enableReroutingWithRouteTaskRouteParametersStrategyVisitFirstStopOnStartCompletion(routeTask: AGSRouteTask, routeParameters: AGSRouteParameters, strategy: AGSReroutingStrategy, visitFirstStopOnStart: boolean, completion: (p1: NSError) => void): AGSCancelable;

	generateVoiceGuidance(): AGSVoiceGuidance;

	initWithRouteResultRouteIndex(routeResult: AGSRouteResult, routeIndex: number): this;

	switchToNextDestinationWithCompletion(completion: (p1: NSError) => void): AGSCancelable;

	trackLocationCompletion(location: AGSLocation, completion: (p1: NSError) => void): AGSCancelable;
}

interface AGSRouteTrackerDelegate extends NSObjectProtocol {

	routeTrackerDidGenerateNewVoiceGuidance?(routeTracker: AGSRouteTracker, voiceGuidance: AGSVoiceGuidance): void;

	routeTrackerDidUpdateTrackingStatus?(routeTracker: AGSRouteTracker, trackingStatus: AGSTrackingStatus): void;

	routeTrackerRerouteDidCompleteWithTrackingStatusError?(routeTracker: AGSRouteTracker, trackingStatus: AGSTrackingStatus, error: NSError): void;

	routeTrackerRerouteDidStart?(routeTracker: AGSRouteTracker): void;
}
declare var AGSRouteTrackerDelegate: {

	prototype: AGSRouteTrackerDelegate;
};

declare class AGSScene extends AGSLoadableBase {

	static alloc(): AGSScene; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSScene; // inherited from NSObject

	static scene(): AGSScene;

	static sceneWithBasemap(basemap: AGSBasemap): AGSScene;

	static sceneWithBasemapType(basemapType: AGSBasemapType): AGSScene;

	static sceneWithItem(item: AGSItem): AGSScene;

	static sceneWithTilingScheme(tilingScheme: AGSSceneViewTilingScheme): AGSScene;

	static sceneWithURL(URL: NSURL): AGSScene;

	baseSurface: AGSSurface;

	basemap: AGSBasemap;

	readonly bookmarks: NSMutableArray<AGSBookmark>;

	initialViewpoint: AGSViewpoint;

	readonly item: AGSItem;

	loadSettings: AGSLoadSettings;

	readonly operationalLayers: NSMutableArray<AGSLayer>;

	readonly sceneViewTilingScheme: AGSSceneViewTilingScheme;

	readonly spatialReference: AGSSpatialReference;

	readonly tables: NSMutableArray<AGSFeatureTable>;

	readonly transportationNetworks: NSArray<AGSTransportationNetworkDataset>;

	readonly unknownJSON: NSDictionary<string, any>;

	readonly unsupportedJSON: NSDictionary<string, any>;

	readonly version: string;

	constructor(o: { basemap: AGSBasemap; });

	constructor(o: { basemapType: AGSBasemapType; });

	constructor(o: { item: AGSItem; });

	constructor(o: { tilingScheme: AGSSceneViewTilingScheme; });

	constructor(o: { URL: NSURL; });

	initWithBasemap(basemap: AGSBasemap): this;

	initWithBasemapType(basemapType: AGSBasemapType): this;

	initWithItem(item: AGSItem): this;

	initWithTilingScheme(tilingScheme: AGSSceneViewTilingScheme): this;

	initWithURL(URL: NSURL): this;
}

declare const enum AGSSceneLayerDataType {

	Unknown = 0,

	SceneObject = 1,

	Point = 2,

	IntegratedMesh = 3
}

declare const enum AGSSceneSymbolAnchorPosition {

	Top = 0,

	Bottom = 1,

	Center = 2,

	Origin = 3
}

declare class AGSSceneView extends AGSSceneViewCommon {

	static alloc(): AGSSceneView; // inherited from NSObject

	static appearance(): AGSSceneView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AGSSceneView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AGSSceneView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSSceneView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AGSSceneView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSSceneView; // inherited from UIAppearance

	static new(): AGSSceneView; // inherited from NSObject
}

declare class AGSSceneViewCommon extends AGSGeoView {

	static alloc(): AGSSceneViewCommon; // inherited from NSObject

	static appearance(): AGSSceneViewCommon; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AGSSceneViewCommon; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AGSSceneViewCommon; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSSceneViewCommon; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AGSSceneViewCommon; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AGSSceneViewCommon; // inherited from UIAppearance

	static new(): AGSSceneViewCommon; // inherited from NSObject

	ambientLightColor: UIColor;

	readonly analysisOverlays: NSMutableArray<AGSAnalysisOverlay>;

	atmosphereEffect: AGSAtmosphereEffect;

	cameraController: AGSCameraController;

	readonly fieldOfView: number;

	readonly fieldOfViewDistortionRatio: number;

	interactionOptions: AGSSceneViewInteractionOptions;

	manualRendering: boolean;

	scene: AGSScene;

	spaceEffect: AGSSpaceEffect;

	sunLighting: AGSLightingMode;

	sunTime: Date;

	currentViewpointCamera(): AGSCamera;

	locationToScreen(mapPoint: AGSPoint): AGSLocationToScreenResult;

	renderFrame(): void;

	screenToBaseSurface(screenPoint: CGPoint): AGSPoint;

	screenToLocationCompletion(screenPoint: CGPoint, completion: (p1: AGSPoint) => void): AGSCancelable;

	setFieldOfViewAndDistortionRatioWithAngleDistortionRatio(angle: number, distortionRatio: number): void;

	setFieldOfViewFromLensIntrinsicsWithXFocalLengthYFocalLengthXPrincipalYPrincipalXImageSizeYImageSizeDeviceOrientation(xFocalLength: number, yFocalLength: number, xPrincipal: number, yPrincipal: number, xImageSize: number, yImageSize: number, deviceOrientation: UIDeviceOrientation): void;

	setFieldOfViewWithAngle(angle: number): void;

	setViewpointCamera(camera: AGSCamera): void;

	setViewpointCameraCompletion(camera: AGSCamera, completion: (p1: boolean) => void): AGSCancelable;

	setViewpointCameraDurationCompletion(camera: AGSCamera, duration: number, completion: (p1: boolean) => void): AGSCancelable;
}

declare class AGSSceneViewInteractionOptions extends NSObject {

	static alloc(): AGSSceneViewInteractionOptions; // inherited from NSObject

	static new(): AGSSceneViewInteractionOptions; // inherited from NSObject

	static sceneViewInteractionOptions(): AGSSceneViewInteractionOptions;

	enabled: boolean;

	flickEnabled: boolean;

	zoomFactor: number;
}

declare const enum AGSSceneViewTilingScheme {

	Geographic = 0,

	WebMercator = 1
}

declare const enum AGSScreenLocationVisibility {

	Visible = 0,

	HiddenByBaseSurface = 1,

	HiddenByEarth = 2,

	HiddenByElevation = 3,

	NotOnScreen = 4
}

declare class AGSSegment extends AGSObject {

	static alloc(): AGSSegment; // inherited from NSObject

	static new(): AGSSegment; // inherited from NSObject

	readonly closed: boolean;

	readonly endPoint: AGSPoint;

	readonly spatialReference: AGSSpatialReference;

	readonly startPoint: AGSPoint;

	isEqualToSegment(other: AGSSegment): boolean;
}

declare const enum AGSSelectionMode {

	Add = 0,

	New = 1,

	Subtract = 2
}

declare class AGSSelectionProperties extends AGSObject {

	static alloc(): AGSSelectionProperties; // inherited from NSObject

	static new(): AGSSelectionProperties; // inherited from NSObject

	static selectionProperties(): AGSSelectionProperties;

	static selectionPropertiesWithColor(color: UIColor): AGSSelectionProperties;

	color: UIColor;

	constructor(o: { color: UIColor; });

	initWithColor(color: UIColor): this;
}

declare class AGSServiceAreaFacility extends AGSObject implements NSCopying {

	static alloc(): AGSServiceAreaFacility; // inherited from NSObject

	static new(): AGSServiceAreaFacility; // inherited from NSObject

	static serviceAreaFacilityWithPoint(point: AGSPoint): AGSServiceAreaFacility;

	curbApproach: AGSCurbApproach;

	currentBearing: number;

	currentBearingTolerance: number;

	readonly distanceToNetworkLocation: number;

	facilityID: number;

	readonly geometry: AGSPoint;

	impedanceCutoffs: NSArray<number>;

	readonly locationStatus: AGSLocationStatus;

	name: string;

	navigationLatency: number;

	navigationSpeed: number;

	networkLocation: AGSNetworkLocation;

	constructor(o: { point: AGSPoint; });

	addedCostForCostAttribute(attributeName: string): number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPoint(point: AGSPoint): this;

	setAddedCostForCostAttribute(addedCost: number, attributeName: string): void;
}

declare const enum AGSServiceAreaOverlapGeometry {

	Overlap = 0,

	Dissolve = 1,

	Split = 2
}

declare class AGSServiceAreaParameters extends AGSObject implements NSCopying {

	static alloc(): AGSServiceAreaParameters; // inherited from NSObject

	static new(): AGSServiceAreaParameters; // inherited from NSObject

	accumulateAttributeNames: NSArray<string>;

	defaultImpedanceCutoffs: NSArray<number>;

	geometryAtCutoff: AGSServiceAreaPolygonCutoffGeometry;

	geometryAtOverlap: AGSServiceAreaOverlapGeometry;

	outputSpatialReference: AGSSpatialReference;

	polygonBufferDistance: number;

	polygonDetail: AGSServiceAreaPolygonDetail;

	returnPointBarriers: boolean;

	returnPolygonBarriers: boolean;

	returnPolygons: boolean;

	returnPolylineBarriers: boolean;

	returnPolylines: boolean;

	startTime: Date;

	travelDirection: AGSTravelDirection;

	travelMode: AGSTravelMode;

	clearFacilities(): void;

	clearPointBarriers(): void;

	clearPolygonBarriers(): void;

	clearPolylineBarriers(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	searchWhereClauseWithSourceName(sourceName: string): string;

	setFacilities(facilities: NSArray<AGSServiceAreaFacility> | AGSServiceAreaFacility[]): void;

	setFacilitiesWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setPointBarriers(pointBarriers: NSArray<AGSPointBarrier> | AGSPointBarrier[]): void;

	setPointBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setPolygonBarriers(polygonBarriers: NSArray<AGSPolygonBarrier> | AGSPolygonBarrier[]): void;

	setPolygonBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setPolylineBarriers(lineBarriers: NSArray<AGSPolylineBarrier> | AGSPolylineBarrier[]): void;

	setPolylineBarriersWithFeatureTableQueryParameters(featureTable: AGSArcGISFeatureTable, queryParameters: AGSQueryParameters): void;

	setSearchWhereClauseWithSourceNameSearchWhereClause(sourceName: string, searchWhereClause: string): void;
}

declare class AGSServiceAreaPolygon extends AGSObject {

	static alloc(): AGSServiceAreaPolygon; // inherited from NSObject

	static new(): AGSServiceAreaPolygon; // inherited from NSObject

	readonly fromImpedanceCutoff: number;

	readonly geometry: AGSPolygon;

	readonly toImpedanceCutoff: number;
}

declare const enum AGSServiceAreaPolygonCutoffGeometry {

	Rings = 0,

	Disks = 1
}

declare const enum AGSServiceAreaPolygonDetail {

	Generalized = 0,

	Standard = 1,

	High = 2
}

declare class AGSServiceAreaPolyline extends AGSObject {

	static alloc(): AGSServiceAreaPolyline; // inherited from NSObject

	static new(): AGSServiceAreaPolyline; // inherited from NSObject

	readonly fromNetworkLocation: AGSNetworkLocation;

	readonly geometry: AGSPolyline;

	readonly toNetworkLocation: AGSNetworkLocation;

	fromCumulativeCostForCostAttribute(attributeName: string): number;

	toCumulativeCostForCostAttribute(attributeName: string): number;
}

declare class AGSServiceAreaResult extends AGSObject {

	static alloc(): AGSServiceAreaResult; // inherited from NSObject

	static new(): AGSServiceAreaResult; // inherited from NSObject

	readonly facilities: NSArray<AGSServiceAreaFacility>;

	readonly messages: NSArray<string>;

	readonly pointBarriers: NSArray<AGSPointBarrier>;

	readonly polygonBarriers: NSArray<AGSPolygonBarrier>;

	readonly polylineBarriers: NSArray<AGSPolylineBarrier>;

	resultPolygonsAtFacilityIndex(facilityIndex: number): NSArray<AGSServiceAreaPolygon>;

	resultPolylinesAtFacilityIndex(facilityIndex: number): NSArray<AGSServiceAreaPolyline>;
}

declare class AGSServiceAreaTask extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSServiceAreaTask; // inherited from NSObject

	static new(): AGSServiceAreaTask; // inherited from NSObject

	static serviceAreaTaskWithDatabaseNameNetworkName(databaseName: string, networkName: string): AGSServiceAreaTask;

	static serviceAreaTaskWithDataset(dataset: AGSTransportationNetworkDataset): AGSServiceAreaTask;

	static serviceAreaTaskWithFileURLToDatabaseNetworkName(fileURLToDatabase: NSURL, networkName: string): AGSServiceAreaTask;

	static serviceAreaTaskWithURL(URL: NSURL): AGSServiceAreaTask;

	readonly serviceAreaTaskInfo: AGSServiceAreaTaskInfo;

	readonly transportationNetworkDataset: AGSTransportationNetworkDataset;

	constructor(o: { databaseName: string; networkName: string; });

	constructor(o: { dataset: AGSTransportationNetworkDataset; });

	constructor(o: { fileURLToDatabase: NSURL; networkName: string; });

	constructor(o: { URL: NSURL; });

	defaultServiceAreaParametersWithCompletion(completion: (p1: AGSServiceAreaParameters, p2: NSError) => void): AGSCancelable;

	initWithDatabaseNameNetworkName(databaseName: string, networkName: string): this;

	initWithDataset(dataset: AGSTransportationNetworkDataset): this;

	initWithFileURLToDatabaseNetworkName(fileURLToDatabase: NSURL, networkName: string): this;

	initWithURL(URL: NSURL): this;

	solveServiceAreaWithParametersCompletion(serviceAreaParameters: AGSServiceAreaParameters, completion: (p1: AGSServiceAreaResult, p2: NSError) => void): AGSCancelable;
}

declare class AGSServiceAreaTaskInfo extends AGSObject {

	static alloc(): AGSServiceAreaTaskInfo; // inherited from NSObject

	static new(): AGSServiceAreaTaskInfo; // inherited from NSObject

	readonly accumulateAttributeNames: NSArray<string>;

	readonly costAttributes: NSDictionary<string, AGSCostAttribute>;

	readonly defaultImpedanceCutoffs: NSArray<number>;

	readonly defaultTravelModeName: string;

	readonly geometryAtCutoff: AGSServiceAreaPolygonCutoffGeometry;

	readonly geometryAtOverlap: AGSServiceAreaOverlapGeometry;

	readonly maxLocatingDistance: number;

	readonly networkName: string;

	readonly outputSpatialReference: AGSSpatialReference;

	readonly polygonBufferDistance: number;

	readonly polygonDetail: AGSServiceAreaPolygonDetail;

	readonly restrictionAttributes: NSDictionary<string, AGSRestrictionAttribute>;

	readonly returnPolygons: boolean;

	readonly returnPolylines: boolean;

	readonly startTime: Date;

	readonly supportedRestrictionUsageParameterValues: NSArray<string>;

	readonly travelDirection: AGSTravelDirection;

	readonly travelModes: NSArray<AGSTravelMode>;
}

declare class AGSServiceDocumentInfo extends AGSObject {

	static alloc(): AGSServiceDocumentInfo; // inherited from NSObject

	static new(): AGSServiceDocumentInfo; // inherited from NSObject

	readonly antialiasingMode: AGSAntialiasingMode;

	readonly author: string;

	readonly category: string;

	readonly comments: string;

	readonly keywords: NSArray<string>;

	readonly subject: string;

	readonly textAntialiasingMode: AGSTextAntialiasingMode;

	readonly title: string;
}

declare class AGSServiceFeatureTable extends AGSArcGISFeatureTable implements AGSRemoteResource {

	static alloc(): AGSServiceFeatureTable; // inherited from NSObject

	static new(): AGSServiceFeatureTable; // inherited from NSObject

	static serviceFeatureTableWithItemLayerID(item: AGSItem, layerID: number): AGSServiceFeatureTable;

	static serviceFeatureTableWithTableRelationshipInfo(table: AGSServiceFeatureTable, relationshipInfo: AGSRelationshipInfo): AGSServiceFeatureTable;

	static serviceFeatureTableWithURL(URL: NSURL): AGSServiceFeatureTable;

	bufferFactor: number;

	definitionExpression: string;

	featureRequestMode: AGSFeatureRequestMode;

	geodatabaseVersion: string;

	readonly item: AGSItem;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; layerID: number; });

	constructor(o: { table: AGSServiceFeatureTable; relationshipInfo: AGSRelationshipInfo; });

	constructor(o: { URL: NSURL; });

	applyEditsWithCompletion(completion: (p1: NSArray<AGSFeatureEditResult>, p2: NSError) => void): AGSCancelable;

	class(): typeof NSObject;

	clearCacheWithKeepLocalEdits(keepLocalEdits: boolean): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItemLayerID(item: AGSItem, layerID: number): this;

	initWithTableRelationshipInfo(table: AGSServiceFeatureTable, relationshipInfo: AGSRelationshipInfo): this;

	initWithURL(url: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadOrRefreshFeaturesCompletion(features: NSArray<AGSArcGISFeature> | AGSArcGISFeature[], completion: (p1: NSError) => void): AGSCancelable;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	populateFromServiceWithParametersClearCacheOutFieldsCompletion(parameters: AGSQueryParameters, clearCache: boolean, outFields: NSArray<string> | string[], completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	queryFeaturesWithParametersQueryFeatureFieldsCompletion(parameters: AGSQueryParameters, queryFeatureFields: AGSQueryFeatureFields, completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	queryRelatedFeaturesForFeatureParametersQueryFeatureFieldsCompletion(feature: AGSArcGISFeature, parameters: AGSRelatedQueryParameters, queryFeatureFields: AGSQueryFeatureFields, completion: (p1: NSArray<AGSRelatedFeatureQueryResult>, p2: NSError) => void): AGSCancelable;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	undoLocalEditsWithCompletion(completion: (p1: NSError) => void): AGSCancelable;
}

declare class AGSServiceImageTiledLayer extends AGSImageTiledLayer implements AGSRemoteResource {

	static alloc(): AGSServiceImageTiledLayer; // inherited from NSObject

	static imageTiledLayerWithTileInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSServiceImageTiledLayer; // inherited from AGSImageTiledLayer

	static new(): AGSServiceImageTiledLayer; // inherited from NSObject

	static serviceImageTiledLayerWithTiledInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSServiceImageTiledLayer;

	urlForTileKeyHandler: (p1: AGSTileKey) => NSURL;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSServiceTimeInfo extends AGSObject {

	static alloc(): AGSServiceTimeInfo; // inherited from NSObject

	static new(): AGSServiceTimeInfo; // inherited from NSObject

	readonly defaultInterval: AGSTimeValue;

	readonly defaultTimeInterval: number;

	readonly defaultTimeIntervalUnit: AGSTimeUnit;

	readonly defaultTimeWindow: number;

	readonly hasLiveData: boolean;

	readonly timeExtent: AGSTimeExtent;

	readonly timeReference: AGSTimeReference;

	readonly timeRelation: AGSTimeRelation;

	readonly timeWindow: AGSTimeValue;

	isEqualToServiceTimeInfo(other: AGSServiceTimeInfo): boolean;
}

declare const enum AGSServiceType {

	Unknown = -1,

	FeatureService = 0,

	ImageService = 1,

	MapService = 2
}

declare const enum AGSServicesErrorCode {

	BadRequest = 400,

	Unauthorized = 401,

	Forbidden = 403,

	URLNotFound = 404,

	InvalidToken = 498,

	TokenRequired = 499,

	UnknownError = 500
}

declare var AGSServicesErrorDomain: string;

declare class AGSShapefileFeatureTable extends AGSFeatureTable {

	static alloc(): AGSShapefileFeatureTable; // inherited from NSObject

	static new(): AGSShapefileFeatureTable; // inherited from NSObject

	static shapefileFeatureTableWithFileURL(fileURL: NSURL): AGSShapefileFeatureTable;

	static shapefileFeatureTableWithName(name: string): AGSShapefileFeatureTable;

	readonly fileURL: NSURL;

	readonly shapefileInfo: AGSShapefileInfo;

	readonly spatialIndexEnabled: boolean;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { name: string; });

	close(): void;

	initWithFileURL(fileURL: NSURL): this;

	initWithName(name: string): this;
}

declare class AGSShapefileInfo extends AGSObject {

	static alloc(): AGSShapefileInfo; // inherited from NSObject

	static new(): AGSShapefileInfo; // inherited from NSObject

	readonly copyrightText: string;

	readonly credits: string;

	readonly shapefileDescription: string;

	readonly summary: string;

	readonly tags: NSArray<string>;

	readonly thumbnail: UIImage;
}

declare class AGSSimpleFillSymbol extends AGSFillSymbol {

	static alloc(): AGSSimpleFillSymbol; // inherited from NSObject

	static new(): AGSSimpleFillSymbol; // inherited from NSObject

	static simpleFillSymbolWithStyleColorOutline(style: AGSSimpleFillSymbolStyle, color: UIColor, outline: AGSSimpleLineSymbol): AGSSimpleFillSymbol;

	style: AGSSimpleFillSymbolStyle;

	constructor(o: { style: AGSSimpleFillSymbolStyle; color: UIColor; outline: AGSSimpleLineSymbol; });

	initWithStyleColorOutline(style: AGSSimpleFillSymbolStyle, color: UIColor, outline: AGSSimpleLineSymbol): this;

	toMultilayerSymbol(): AGSMultilayerPolygonSymbol;
}

declare const enum AGSSimpleFillSymbolStyle {

	BackwardDiagonal = 0,

	Cross = 1,

	DiagonalCross = 2,

	ForwardDiagonal = 3,

	Horizontal = 4,

	Null = 5,

	Solid = 6,

	Vertical = 7
}

declare class AGSSimpleLineSymbol extends AGSLineSymbol {

	static alloc(): AGSSimpleLineSymbol; // inherited from NSObject

	static new(): AGSSimpleLineSymbol; // inherited from NSObject

	static simpleLineSymbolWithStyleColorWidth(style: AGSSimpleLineSymbolStyle, color: UIColor, width: number): AGSSimpleLineSymbol;

	static simpleLineSymbolWithStyleColorWidthMarkerStyleMarkerPlacement(style: AGSSimpleLineSymbolStyle, color: UIColor, width: number, markerStyle: AGSSimpleLineSymbolMarkerStyle, markerPlacement: AGSSimpleLineSymbolMarkerPlacement): AGSSimpleLineSymbol;

	markerPlacement: AGSSimpleLineSymbolMarkerPlacement;

	markerStyle: AGSSimpleLineSymbolMarkerStyle;

	style: AGSSimpleLineSymbolStyle;

	constructor(o: { style: AGSSimpleLineSymbolStyle; color: UIColor; width: number; });

	constructor(o: { style: AGSSimpleLineSymbolStyle; color: UIColor; width: number; markerStyle: AGSSimpleLineSymbolMarkerStyle; markerPlacement: AGSSimpleLineSymbolMarkerPlacement; });

	initWithStyleColorWidth(style: AGSSimpleLineSymbolStyle, color: UIColor, width: number): this;

	initWithStyleColorWidthMarkerStyleMarkerPlacement(style: AGSSimpleLineSymbolStyle, color: UIColor, width: number, markerStyle: AGSSimpleLineSymbolMarkerStyle, markerPlacement: AGSSimpleLineSymbolMarkerPlacement): this;

	toMultilayerSymbol(): AGSMultilayerPolylineSymbol;
}

declare const enum AGSSimpleLineSymbolMarkerPlacement {

	Begin = 0,

	End = 1,

	BeginAndEnd = 2
}

declare const enum AGSSimpleLineSymbolMarkerStyle {

	None = 0,

	Arrow = 1
}

declare const enum AGSSimpleLineSymbolStyle {

	Dash = 0,

	DashDot = 1,

	DashDotDot = 2,

	Dot = 3,

	Null = 4,

	Solid = 5
}

declare class AGSSimpleMarkerSceneSymbol extends AGSMarkerSceneSymbol {

	static alloc(): AGSSimpleMarkerSceneSymbol; // inherited from NSObject

	static coneWithColorDiameterHeight(color: UIColor, diameter: number, height: number): AGSSimpleMarkerSceneSymbol;

	static coneWithColorDiameterHeightAnchorPosition(color: UIColor, diameter: number, height: number, anchorPosition: AGSSceneSymbolAnchorPosition): AGSSimpleMarkerSceneSymbol;

	static cubeWithColorSize(color: UIColor, size: number): AGSSimpleMarkerSceneSymbol;

	static cubeWithColorSizeAnchorPosition(color: UIColor, size: number, anchorPosition: AGSSceneSymbolAnchorPosition): AGSSimpleMarkerSceneSymbol;

	static cylinderWithColorDiameterHeight(color: UIColor, diameter: number, height: number): AGSSimpleMarkerSceneSymbol;

	static cylinderWithColorDiameterHeightAnchorPosition(color: UIColor, diameter: number, height: number, anchorPosition: AGSSceneSymbolAnchorPosition): AGSSimpleMarkerSceneSymbol;

	static diamondWithColorSizeHeight(color: UIColor, size: number, height: number): AGSSimpleMarkerSceneSymbol;

	static diamondWithColorSizeHeightAnchorPosition(color: UIColor, size: number, height: number, anchorPosition: AGSSceneSymbolAnchorPosition): AGSSimpleMarkerSceneSymbol;

	static new(): AGSSimpleMarkerSceneSymbol; // inherited from NSObject

	static simpleMarkerSceneSymbol(): AGSSimpleMarkerSceneSymbol;

	static simpleMarkerSceneSymbolWithStyleColorHeightWidthDepthAnchorPosition(style: AGSSimpleMarkerSceneSymbolStyle, color: UIColor, height: number, width: number, depth: number, anchorPosition: AGSSceneSymbolAnchorPosition): AGSSimpleMarkerSceneSymbol;

	static sphereWithColorDiameter(color: UIColor, diameter: number): AGSSimpleMarkerSceneSymbol;

	static sphereWithColorDiameterAnchorPosition(color: UIColor, diameter: number, anchorPosition: AGSSceneSymbolAnchorPosition): AGSSimpleMarkerSceneSymbol;

	static tetrahedronWithColorSizeHeight(color: UIColor, size: number, height: number): AGSSimpleMarkerSceneSymbol;

	static tetrahedronWithColorSizeHeightAnchorPosition(color: UIColor, size: number, height: number, anchorPosition: AGSSceneSymbolAnchorPosition): AGSSimpleMarkerSceneSymbol;

	style: AGSSimpleMarkerSceneSymbolStyle;

	constructor(o: { style: AGSSimpleMarkerSceneSymbolStyle; color: UIColor; height: number; width: number; depth: number; anchorPosition: AGSSceneSymbolAnchorPosition; });

	initWithStyleColorHeightWidthDepthAnchorPosition(style: AGSSimpleMarkerSceneSymbolStyle, color: UIColor, height: number, width: number, depth: number, anchorPosition: AGSSceneSymbolAnchorPosition): this;
}

declare const enum AGSSimpleMarkerSceneSymbolStyle {

	Cone = 0,

	Cube = 1,

	Cylinder = 2,

	Diamond = 3,

	Sphere = 4,

	Tetrahedron = 5
}

declare class AGSSimpleMarkerSymbol extends AGSMarkerSymbol {

	static alloc(): AGSSimpleMarkerSymbol; // inherited from NSObject

	static new(): AGSSimpleMarkerSymbol; // inherited from NSObject

	static simpleMarkerSymbol(): AGSSimpleMarkerSymbol;

	static simpleMarkerSymbolWithStyleColorSize(style: AGSSimpleMarkerSymbolStyle, color: UIColor, size: number): AGSSimpleMarkerSymbol;

	color: UIColor;

	outline: AGSSimpleLineSymbol;

	size: number;

	style: AGSSimpleMarkerSymbolStyle;

	constructor(o: { style: AGSSimpleMarkerSymbolStyle; color: UIColor; size: number; });

	initWithStyleColorSize(style: AGSSimpleMarkerSymbolStyle, color: UIColor, size: number): this;

	toMultilayerSymbol(): AGSMultilayerPointSymbol;
}

declare const enum AGSSimpleMarkerSymbolStyle {

	Circle = 0,

	Cross = 1,

	Diamond = 2,

	Square = 3,

	Triangle = 4,

	X = 5
}

declare class AGSSimpleRenderer extends AGSRenderer {

	static alloc(): AGSSimpleRenderer; // inherited from NSObject

	static new(): AGSSimpleRenderer; // inherited from NSObject

	static simpleRenderer(): AGSSimpleRenderer;

	static simpleRendererWithSymbol(symbol: AGSSymbol): AGSSimpleRenderer;

	label: string;

	rendererDescription: string;

	symbol: AGSSymbol;

	constructor(o: { symbol: AGSSymbol; });

	initWithSymbol(symbol: AGSSymbol): this;
}

declare class AGSSimulatedLocationDataSource extends AGSLocationDataSource {

	static alloc(): AGSSimulatedLocationDataSource; // inherited from NSObject

	static new(): AGSSimulatedLocationDataSource; // inherited from NSObject

	locations: NSArray<AGSLocation>;

	setLocationsWithPolyline(polyline: AGSPolyline): void;
}

declare const enum AGSSketchCreationMode {

	Unset = -1,

	Point = 0,

	Multipoint = 1,

	Polyline = 2,

	Polygon = 3,

	FreehandPolyline = 4,

	FreehandPolygon = 5,

	Rectangle = 6,

	Ellipse = 7,

	Triangle = 8,

	Arrow = 9
}

declare class AGSSketchEditConfiguration extends NSObject {

	static alloc(): AGSSketchEditConfiguration; // inherited from NSObject

	static new(): AGSSketchEditConfiguration; // inherited from NSObject

	allowMoveParts: boolean;

	allowPartSelection: boolean;

	allowRotate: boolean;

	allowVertexEditing: boolean;

	contextMenuEnabled: boolean;

	requireSelectionBeforeDrag: boolean;

	resizeMode: AGSSketchResizeMode;

	vertexEditMode: AGSSketchVertexEditMode;
}

declare class AGSSketchEditor extends NSObject {

	static alloc(): AGSSketchEditor; // inherited from NSObject

	static new(): AGSSketchEditor; // inherited from NSObject

	static sketchEditor(): AGSSketchEditor;

	readonly creationMode: AGSSketchCreationMode;

	editConfiguration: AGSSketchEditConfiguration;

	readonly geometry: AGSGeometry;

	opacity: number;

	selectedVertex: AGSSketchVertex;

	readonly sketchValid: boolean;

	readonly started: boolean;

	style: AGSSketchStyle;

	readonly undoManager: NSUndoManager;

	visible: boolean;

	clearGeometry(): void;

	insertVertexAfterSelectedVertexWithPoint(point: AGSPoint): boolean;

	moveSelectedVertexToPoint(point: AGSPoint): boolean;

	removeSelectedVertex(): boolean;

	replaceGeometry(geometry: AGSGeometry): void;

	startWithCreationMode(creationMode: AGSSketchCreationMode): boolean;

	startWithCreationModeEditConfiguration(creationMode: AGSSketchCreationMode, editConfiguration: AGSSketchEditConfiguration): boolean;

	startWithGeometry(geometry: AGSGeometry): boolean;

	startWithGeometryCreationMode(geometry: AGSGeometry, creationMode: AGSSketchCreationMode): boolean;

	startWithGeometryCreationModeEditConfiguration(geometry: AGSGeometry, creationMode: AGSSketchCreationMode, editConfiguration: AGSSketchEditConfiguration): boolean;

	startWithGeometryType(geometryType: AGSGeometryType): boolean;

	stop(): void;
}

declare var AGSSketchEditorGeometryDidChangeNotification: string;

declare const enum AGSSketchResizeMode {

	None = 0,

	Stretch = 1,

	Uniform = 2
}

declare class AGSSketchStyle extends NSObject {

	static alloc(): AGSSketchStyle; // inherited from NSObject

	static new(): AGSSketchStyle; // inherited from NSObject

	feedbackFillSymbol: AGSSymbol;

	feedbackLineSymbol: AGSSymbol;

	feedbackVertexSymbol: AGSSymbol;

	fillSymbol: AGSSymbol;

	lineSymbol: AGSSymbol;

	midVertexSymbol: AGSSymbol;

	selectedMidVertexSymbol: AGSSymbol;

	selectedVertexSymbol: AGSSymbol;

	selectionColor: UIColor;

	showNumbersForVertices: boolean;

	vertexSymbol: AGSSymbol;

	vertexTextSymbol: AGSSymbol;
}

declare class AGSSketchVertex extends NSObject {

	static alloc(): AGSSketchVertex; // inherited from NSObject

	static new(): AGSSketchVertex; // inherited from NSObject

	static sketchVertexWithPartIndexInsertionIndex(partIndex: number, insertionIndex: number): AGSSketchVertex;

	static sketchVertexWithPartIndexPointIndex(partIndex: number, pointIndex: number): AGSSketchVertex;

	readonly insertionIndex: number;

	readonly partIndex: number;

	readonly point: AGSPoint;

	readonly pointIndex: number;

	constructor(o: { partIndex: number; insertionIndex: number; });

	constructor(o: { partIndex: number; pointIndex: number; });

	initWithPartIndexInsertionIndex(partIndex: number, insertionIndex: number): this;

	initWithPartIndexPointIndex(partIndex: number, pointIndex: number): this;
}

declare const enum AGSSketchVertexEditMode {

	InteractionEdit = 0,

	SelectOnly = 1
}

declare const enum AGSSlopeType {

	None = -1,

	Degree = 0,

	PercentRise = 1,

	Scaled = 2
}

declare class AGSSolidFillSymbolLayer extends AGSFillSymbolLayer {

	static alloc(): AGSSolidFillSymbolLayer; // inherited from NSObject

	static new(): AGSSolidFillSymbolLayer; // inherited from NSObject

	static solidFillSymbolLayer(): AGSSolidFillSymbolLayer;

	static solidFillSymbolLayerWithColor(color: UIColor): AGSSolidFillSymbolLayer;

	color: UIColor;

	constructor(o: { color: UIColor; });

	initWithColor(color: UIColor): this;
}

declare class AGSSolidStrokeSymbolLayer extends AGSStrokeSymbolLayer {

	static alloc(): AGSSolidStrokeSymbolLayer; // inherited from NSObject

	static new(): AGSSolidStrokeSymbolLayer; // inherited from NSObject

	static solidStrokeSymbolLayerWithWidthColor(width: number, color: UIColor): AGSSolidStrokeSymbolLayer;

	static solidStrokeSymbolLayerWithWidthColorGeometricEffects(width: number, color: UIColor, geometricEffects: NSArray<AGSGeometricEffect> | AGSGeometricEffect[]): AGSSolidStrokeSymbolLayer;

	static solidStrokeSymbolLayerWithWidthColorGeometricEffectsLineStyle3D(width: number, color: UIColor, geometricEffects: NSArray<AGSGeometricEffect> | AGSGeometricEffect[], lineStyle3D: AGSStrokeSymbolLayerLineStyle3D): AGSSolidStrokeSymbolLayer;

	color: UIColor;

	geometricEffects: NSArray<AGSGeometricEffect>;

	constructor(o: { width: number; color: UIColor; });

	constructor(o: { width: number; color: UIColor; geometricEffects: NSArray<AGSGeometricEffect> | AGSGeometricEffect[]; });

	constructor(o: { width: number; color: UIColor; geometricEffects: NSArray<AGSGeometricEffect> | AGSGeometricEffect[]; lineStyle3D: AGSStrokeSymbolLayerLineStyle3D; });

	initWithWidthColor(width: number, color: UIColor): this;

	initWithWidthColorGeometricEffects(width: number, color: UIColor, geometricEffects: NSArray<AGSGeometricEffect> | AGSGeometricEffect[]): this;

	initWithWidthColorGeometricEffectsLineStyle3D(width: number, color: UIColor, geometricEffects: NSArray<AGSGeometricEffect> | AGSGeometricEffect[], lineStyle3D: AGSStrokeSymbolLayerLineStyle3D): this;
}

declare const enum AGSSortOrder {

	Ascending = 0,

	Descending = 1
}

declare class AGSSourceObjectPosition extends AGSObject {

	static alloc(): AGSSourceObjectPosition; // inherited from NSObject

	static new(): AGSSourceObjectPosition; // inherited from NSObject

	static sourceObjectPositionWithSourceIndexSourceObjectIDPosition(sourceIndex: number, sourceObjectID: number, position: number): AGSSourceObjectPosition;

	position: number;

	sourceIndex: number;

	sourceObjectID: number;

	constructor(o: { sourceIndex: number; sourceObjectID: number; position: number; });

	initWithSourceIndexSourceObjectIDPosition(sourceIndex: number, sourceObjectID: number, position: number): this;
}

declare const enum AGSSpaceEffect {

	Stars = 0,

	Transparent = 1
}

declare class AGSSpatialReference extends AGSObject implements AGSJSONSerializable, NSCopying {

	static WGS84(): AGSSpatialReference;

	static alloc(): AGSSpatialReference; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSSpatialReference; // inherited from NSObject

	static spatialReferenceWithWKID(WKID: number): AGSSpatialReference;

	static spatialReferenceWithWKIDVerticalWKID(WKID: number, verticalWKID: number): AGSSpatialReference;

	static spatialReferenceWithWKText(WKText: string): AGSSpatialReference;

	static webMercator(): AGSSpatialReference;

	readonly WKID: number;

	readonly WKText: string;

	readonly baseGeographic: AGSSpatialReference;

	readonly geographic: boolean;

	readonly pannable: boolean;

	readonly projected: boolean;

	readonly unit: AGSUnit;

	readonly verticalWKID: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { WKID: number; });

	constructor(o: { WKID: number; verticalWKID: number; });

	constructor(o: { WKText: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convergenceAngleWithPoint(point: AGSPoint): number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithWKID(WKID: number): this;

	initWithWKIDVerticalWKID(WKID: number, verticalWKID: number): this;

	initWithWKText(WKText: string): this;

	isEqual(object: any): boolean;

	isEqualToSpatialReference(other: AGSSpatialReference): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare const enum AGSSpatialRelationship {

	Unknown = -1,

	Relate = 0,

	Equals = 1,

	Disjoint = 2,

	Intersects = 3,

	Touches = 4,

	Crosses = 5,

	Within = 6,

	Contains = 7,

	Overlaps = 8,

	EnvelopeIntersects = 9,

	IndexIntersects = 10
}

declare class AGSStandardDeviationStretchParameters extends AGSStretchParameters {

	static alloc(): AGSStandardDeviationStretchParameters; // inherited from NSObject

	static new(): AGSStandardDeviationStretchParameters; // inherited from NSObject

	static standardDeviationStretchParameterstWithFactor(factor: number): AGSStandardDeviationStretchParameters;

	readonly factor: number;

	constructor(o: { factor: number; });

	initWithFactor(factor: number): this;
}

declare const enum AGSStartTimeUsage {

	DepartureTime = 0,

	ArrivalTime = 1
}

declare class AGSStatisticDefinition extends AGSObject {

	static alloc(): AGSStatisticDefinition; // inherited from NSObject

	static new(): AGSStatisticDefinition; // inherited from NSObject

	static statisticDefinitionWithOnFieldNameStatisticTypeOutputAlias(onFieldName: string, statisticType: AGSStatisticType, outputAlias: string): AGSStatisticDefinition;

	onFieldName: string;

	outputAlias: string;

	statisticType: AGSStatisticType;

	constructor(o: { onFieldName: string; statisticType: AGSStatisticType; outputAlias: string; });

	initWithOnFieldNameStatisticTypeOutputAlias(onFieldName: string, statisticType: AGSStatisticType, outputAlias: string): this;
}

declare class AGSStatisticRecord extends AGSObject {

	static alloc(): AGSStatisticRecord; // inherited from NSObject

	static new(): AGSStatisticRecord; // inherited from NSObject

	readonly group: NSDictionary<string, any>;

	readonly statistics: NSDictionary<string, any>;
}

declare class AGSStatisticRecordEnumerator extends NSEnumerator<NSObject> {

	static alloc(): AGSStatisticRecordEnumerator; // inherited from NSObject

	static new(): AGSStatisticRecordEnumerator; // inherited from NSObject

	hasNextObject(): boolean;

	nextObject(): AGSStatisticRecord;

	reset(): void;
}

declare const enum AGSStatisticType {

	Average = 0,

	Count = 1,

	Maximum = 2,

	Minimum = 3,

	StandardDeviation = 4,

	Sum = 5,

	Variance = 6
}

declare class AGSStatisticsQueryParameters extends AGSObject {

	static alloc(): AGSStatisticsQueryParameters; // inherited from NSObject

	static new(): AGSStatisticsQueryParameters; // inherited from NSObject

	static statisticsQueryParametersWithStatisticDefinitions(statisticDefinitions: NSArray<AGSStatisticDefinition> | AGSStatisticDefinition[]): AGSStatisticsQueryParameters;

	geometry: AGSGeometry;

	groupByFieldNames: NSArray<string>;

	orderByFields: NSArray<AGSOrderBy>;

	spatialRelationship: AGSSpatialRelationship;

	statisticDefinitions: NSArray<AGSStatisticDefinition>;

	timeExtent: AGSTimeExtent;

	whereClause: string;

	constructor(o: { statisticDefinitions: NSArray<AGSStatisticDefinition> | AGSStatisticDefinition[]; });

	initWithStatisticDefinitions(statisticDefinitions: NSArray<AGSStatisticDefinition> | AGSStatisticDefinition[]): this;
}

declare class AGSStatisticsQueryResult extends AGSObject {

	static alloc(): AGSStatisticsQueryResult; // inherited from NSObject

	static new(): AGSStatisticsQueryResult; // inherited from NSObject

	statisticRecordEnumerator(): AGSStatisticRecordEnumerator;
}

declare class AGSStop extends AGSObject implements NSCopying {

	static alloc(): AGSStop; // inherited from NSObject

	static new(): AGSStop; // inherited from NSObject

	static stopWithPoint(point: AGSPoint): AGSStop;

	readonly arrivalCurbApproach: AGSCurbApproach;

	readonly arrivalTime: Date;

	readonly arrivalTimeShift: number;

	curbApproach: AGSCurbApproach;

	currentBearing: number;

	currentBearingTolerance: number;

	readonly departureCurbApproach: AGSCurbApproach;

	readonly departureTime: Date;

	readonly departureTimeShift: number;

	readonly distanceToNetworkLocation: number;

	geometry: AGSPoint;

	readonly locationStatus: AGSLocationStatus;

	name: string;

	navigationLatency: number;

	navigationSpeed: number;

	networkLocation: AGSNetworkLocation;

	routeName: string;

	readonly sequence: number;

	stopID: number;

	stopType: AGSStopType;

	timeWindowEnd: Date;

	timeWindowStart: Date;

	readonly violationTime: number;

	readonly waitTime: number;

	constructor(o: { point: AGSPoint; });

	addedCostForCostAttribute(attributeName: string): number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	cumulativeCostForCostAttribute(attributeName: string): number;

	initWithPoint(point: AGSPoint): this;

	setAddedCostForCostAttribute(addedCost: number, attributeName: string): void;
}

declare const enum AGSStopType {

	Stop = 0,

	Waypoint = 1,

	RestBreak = 2
}

declare class AGSStretchParameters extends AGSObject {

	static alloc(): AGSStretchParameters; // inherited from NSObject

	static new(): AGSStretchParameters; // inherited from NSObject
}

declare class AGSStretchRenderer extends AGSBaseStretchRenderer {

	static alloc(): AGSStretchRenderer; // inherited from NSObject

	static baseStretchRenderer(): AGSStretchRenderer; // inherited from AGSBaseStretchRenderer

	static new(): AGSStretchRenderer; // inherited from NSObject

	static rasterRenderer(): AGSStretchRenderer; // inherited from AGSRasterRenderer

	static stretchRendererWithStretchParametersGammasEstimateStatisticsColorRamp(stretchParameters: AGSStretchParameters, gammas: NSArray<number> | number[], estimateStatistics: boolean, colorRamp: AGSColorRamp): AGSStretchRenderer;

	constructor(o: { stretchParameters: AGSStretchParameters; gammas: NSArray<number> | number[]; estimateStatistics: boolean; colorRamp: AGSColorRamp; });

	initWithStretchParametersGammasEstimateStatisticsColorRamp(stretchParameters: AGSStretchParameters, gammas: NSArray<number> | number[], estimateStatistics: boolean, colorRamp: AGSColorRamp): this;
}

declare class AGSStrokeSymbolLayer extends AGSSymbolLayer {

	static alloc(): AGSStrokeSymbolLayer; // inherited from NSObject

	static new(): AGSStrokeSymbolLayer; // inherited from NSObject

	capStyle: AGSStrokeSymbolLayerCapStyle;

	lineStyle3D: AGSStrokeSymbolLayerLineStyle3D;

	width: number;
}

declare const enum AGSStrokeSymbolLayerCapStyle {

	Butt = 0,

	Round = 1,

	Square = 2
}

declare const enum AGSStrokeSymbolLayerLineStyle3D {

	Tube = 0,

	Strip = 1
}

declare class AGSSublayerSource extends AGSObject {

	static alloc(): AGSSublayerSource; // inherited from NSObject

	static new(): AGSSublayerSource; // inherited from NSObject
}

declare class AGSSubtypeFeatureLayer extends AGSFeatureLayer {

	static alloc(): AGSSubtypeFeatureLayer; // inherited from NSObject

	static featureLayer(): AGSSubtypeFeatureLayer; // inherited from AGSFeatureLayer

	static featureLayerWithFeatureTable(featureTable: AGSFeatureTable): AGSSubtypeFeatureLayer; // inherited from AGSFeatureLayer

	static featureLayerWithItemLayerID(item: AGSItem, layerID: number): AGSSubtypeFeatureLayer; // inherited from AGSFeatureLayer

	static new(): AGSSubtypeFeatureLayer; // inherited from NSObject

	static subtypeFeatureLayerWithFeatureTable(featureTable: AGSArcGISFeatureTable): AGSSubtypeFeatureLayer;

	readonly subtypeSublayers: NSMutableArray<AGSSubtypeSublayer>;

	constructor(o: { featureTable: AGSArcGISFeatureTable; });

	initWithFeatureTable(featureTable: AGSArcGISFeatureTable): this;

	sublayerWithCode(code: any): AGSSubtypeSublayer;

	sublayerWithName(name: string): AGSSubtypeSublayer;
}

declare class AGSSubtypeSublayer extends AGSArcGISSublayer {

	static alloc(): AGSSubtypeSublayer; // inherited from NSObject

	static new(): AGSSubtypeSublayer; // inherited from NSObject

	labelDefinitions: NSArray<AGSLabelDefinition>;

	labelsEnabled: boolean;

	maxScale: number;

	minScale: number;

	opacity: number;

	renderer: AGSRenderer;

	readonly subtype: AGSFeatureSubtype;
}

declare class AGSSuggestParameters extends AGSObject {

	static alloc(): AGSSuggestParameters; // inherited from NSObject

	static new(): AGSSuggestParameters; // inherited from NSObject

	static suggestParameters(): AGSSuggestParameters;

	categories: NSArray<string>;

	countryCode: string;

	maxResults: number;

	preferredSearchLocation: AGSPoint;

	searchArea: AGSGeometry;
}

declare class AGSSuggestResult extends AGSObject {

	static alloc(): AGSSuggestResult; // inherited from NSObject

	static new(): AGSSuggestResult; // inherited from NSObject

	readonly collection: boolean;

	readonly label: string;
}

declare class AGSSurface extends AGSLoadableBase {

	static alloc(): AGSSurface; // inherited from NSObject

	static new(): AGSSurface; // inherited from NSObject

	static surface(): AGSSurface;

	backgroundGrid: AGSBackgroundGrid;

	elevationExaggeration: number;

	elevationSources: NSArray<AGSElevationSource>;

	enabled: boolean;

	name: string;

	navigationConstraint: AGSNavigationConstraint;

	opacity: number;

	elevationForPointCompletion(point: AGSPoint, completion: (p1: number, p2: NSError) => void): AGSCancelable;
}

declare const enum AGSSurfacePlacement {

	DrapedBillboarded = 0,

	Absolute = 1,

	Relative = 2,

	RelativeToScene = 3,

	DrapedFlat = 4,

	Draped = 0
}

declare class AGSSymbol extends AGSObject implements AGSJSONSerializable, NSCopying {

	static alloc(): AGSSymbol; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSSymbol; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	createSwatchWithBackgroundColorScreenCompletion(backgroundColor: UIColor, screen: UIScreen, completion: (p1: UIImage, p2: NSError) => void): AGSCancelable;

	createSwatchWithCompletion(completion: (p1: UIImage, p2: NSError) => void): AGSCancelable;

	createSwatchWithGeometryWidthHeightScreenBackgroundColorCompletion(geometry: AGSGeometry, width: number, height: number, screen: UIScreen, backgroundColor: UIColor, completion: (p1: UIImage, p2: NSError) => void): AGSCancelable;

	createSwatchWithWidthHeightScreenBackgroundColorCompletion(width: number, height: number, screen: UIScreen, backgroundColor: UIColor, completion: (p1: UIImage, p2: NSError) => void): AGSCancelable;

	isEqual(object: any): boolean;

	isEqualToSymbol(other: AGSSymbol): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

interface AGSSymbolAnchor {
	x: number;
	y: number;
	placementMode: AGSSymbolAnchorPlacementMode;
}
declare var AGSSymbolAnchor: interop.StructType<AGSSymbolAnchor>;

declare const enum AGSSymbolAnchorPlacementMode {

	Relative = 0,

	Absolute = 1
}

declare class AGSSymbolLayer extends AGSObject {

	static alloc(): AGSSymbolLayer; // inherited from NSObject

	static new(): AGSSymbolLayer; // inherited from NSObject

	colorLocked: boolean;

	enabled: boolean;

	readonly type: AGSSymbolLayerType;

	isEqualToSymbolLayer(other: AGSSymbolLayer): boolean;
}

declare const enum AGSSymbolLayerType {

	Unknown = -1,

	SymbolLayer = 0,

	MarkerSymbolLayer = 1,

	VectorMarkerSymbolLayer = 2,

	StrokeSymbolLayer = 3,

	SolidStrokeSymbolLayer = 4,

	PictureMarkerSymbolLayer = 5,

	FillSymbolLayer = 6,

	SolidFillSymbolLayer = 7,

	PictureFillSymbolLayer = 8,

	HatchFillSymbolLayer = 9
}

declare const enum AGSSymbolRotationType {

	Arithmetic = 0,

	Geographic = 1
}

declare const enum AGSSymbolSizeUnits {

	DIPs = 0,

	Meters = 1
}

declare class AGSSymbolStyle extends AGSLoadableRemoteResourceBase {

	static alloc(): AGSSymbolStyle; // inherited from NSObject

	static new(): AGSSymbolStyle; // inherited from NSObject

	static symbolStyleWithName(name: string): AGSSymbolStyle;

	static symbolStyleWithURL(fileURL: NSURL): AGSSymbolStyle;

	constructor(o: { name: string; });

	constructor(o: { URL: NSURL; });

	defaultSearchParametersWithCompletion(completion: (p1: AGSSymbolStyleSearchParameters, p2: NSError) => void): AGSCancelable;

	initWithName(name: string): this;

	initWithURL(fileURL: NSURL): this;

	searchSymbolsWithParametersCompletion(searchParameters: AGSSymbolStyleSearchParameters, completion: (p1: NSArray<AGSSymbolStyleSearchResult>, p2: NSError) => void): AGSCancelable;

	symbolForKeysCompletion(keys: NSArray<string> | string[], completion: (p1: AGSSymbol, p2: NSError) => void): AGSCancelable;
}

declare class AGSSymbolStyleSearchParameters extends AGSObject {

	static alloc(): AGSSymbolStyleSearchParameters; // inherited from NSObject

	static new(): AGSSymbolStyleSearchParameters; // inherited from NSObject

	static symbolStyleSearchParameters(): AGSSymbolStyleSearchParameters;

	categories: NSArray<string>;

	categoriesStrictlyMatch: boolean;

	readonly empty: boolean;

	keys: NSArray<string>;

	keysStrictlyMatch: boolean;

	names: NSArray<string>;

	namesStrictlyMatch: boolean;

	symbolClasses: NSArray<string>;

	symbolClassesStrictlyMatch: boolean;

	tags: NSArray<string>;

	tagsStrictlyMatch: boolean;
}

declare class AGSSymbolStyleSearchResult extends AGSObject {

	static alloc(): AGSSymbolStyleSearchResult; // inherited from NSObject

	static new(): AGSSymbolStyleSearchResult; // inherited from NSObject

	readonly category: string;

	readonly key: string;

	readonly name: string;

	readonly symbol: AGSSymbol;

	readonly symbolClass: string;

	readonly tags: NSArray<string>;
}

declare class AGSSyncCapabilities extends AGSObject {

	static alloc(): AGSSyncCapabilities; // inherited from NSObject

	static new(): AGSSyncCapabilities; // inherited from NSObject

	readonly supportsAsync: boolean;

	readonly supportsAttachmentsSyncDirection: boolean;

	readonly supportsRegisteringExistingData: boolean;

	readonly supportsRollbackOnFailure: boolean;

	readonly supportsSyncDirectionControl: boolean;

	readonly supportsSyncModelGeodatabase: boolean;

	readonly supportsSyncModelLayer: boolean;

	readonly supportsSyncModelNone: boolean;
}

declare const enum AGSSyncDirection {

	None = 0,

	Download = 1,

	Upload = 2,

	Bidirectional = 3
}

declare class AGSSyncGeodatabaseJob extends AGSJob {

	static alloc(): AGSSyncGeodatabaseJob; // inherited from NSObject

	static new(): AGSSyncGeodatabaseJob; // inherited from NSObject

	readonly result: NSArray<AGSSyncLayerResult>;

	startWithStatusHandlerCompletion(statusHandler: (p1: AGSJobStatus) => void, completion: (p1: NSArray<AGSSyncLayerResult>, p2: NSError) => void): void;
}

declare class AGSSyncGeodatabaseParameters extends AGSObject {

	static alloc(): AGSSyncGeodatabaseParameters; // inherited from NSObject

	static new(): AGSSyncGeodatabaseParameters; // inherited from NSObject

	static syncGeodatabaseParameters(): AGSSyncGeodatabaseParameters;

	geodatabaseSyncDirection: AGSSyncDirection;

	layerOptions: NSArray<AGSSyncLayerOption>;

	rollbackOnFailure: boolean;
}

declare class AGSSyncLayerOption extends AGSObject implements NSCopying {

	static alloc(): AGSSyncLayerOption; // inherited from NSObject

	static new(): AGSSyncLayerOption; // inherited from NSObject

	static syncLayerOption(): AGSSyncLayerOption;

	static syncLayerOptionWithLayerID(layerID: number): AGSSyncLayerOption;

	static syncLayerOptionWithLayerIDSyncDirection(layerID: number, syncDirection: AGSSyncDirection): AGSSyncLayerOption;

	layerID: number;

	syncDirection: AGSSyncDirection;

	constructor(o: { layerID: number; });

	constructor(o: { layerID: number; syncDirection: AGSSyncDirection; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithLayerID(layerID: number): this;

	initWithLayerIDSyncDirection(layerID: number, syncDirection: AGSSyncDirection): this;
}

declare class AGSSyncLayerResult extends AGSObject {

	static alloc(): AGSSyncLayerResult; // inherited from NSObject

	static new(): AGSSyncLayerResult; // inherited from NSObject

	readonly editResults: NSArray<AGSFeatureEditResult>;

	readonly layerID: number;

	readonly tableName: string;
}

declare const enum AGSSyncModel {

	None = 0,

	Geodatabase = 1,

	Layer = 2
}

declare class AGSTableJoinSublayerSource extends AGSSublayerSource {

	static alloc(): AGSTableJoinSublayerSource; // inherited from NSObject

	static new(): AGSTableJoinSublayerSource; // inherited from NSObject

	static tableJoinSublayerSourceWithLeftFieldNameLeftSublayerSourceRightFieldNameRightSublayerSourceJoinType(leftFieldName: string, leftSublayerSource: AGSSublayerSource, rightFieldName: string, rightSublayerSource: AGSSublayerSource, joinType: AGSJoinType): AGSTableJoinSublayerSource;

	readonly joinType: AGSJoinType;

	readonly leftFieldName: string;

	readonly leftSublayerSource: AGSSublayerSource;

	readonly rightFieldName: string;

	readonly rightSublayerSource: AGSSublayerSource;

	constructor(o: { leftFieldName: string; leftSublayerSource: AGSSublayerSource; rightFieldName: string; rightSublayerSource: AGSSublayerSource; joinType: AGSJoinType; });

	initWithLeftFieldNameLeftSublayerSourceRightFieldNameRightSublayerSourceJoinType(leftFieldName: string, leftSublayerSource: AGSSublayerSource, rightFieldName: string, rightSublayerSource: AGSSublayerSource, joinType: AGSJoinType): this;
}

declare class AGSTableQuerySublayerSource extends AGSSublayerSource {

	static alloc(): AGSTableQuerySublayerSource; // inherited from NSObject

	static new(): AGSTableQuerySublayerSource; // inherited from NSObject

	static tableQuerySublayerSourceWithWorkspaceIDSQLQueryObjectIDFieldNames(workspaceID: string, SQLQuery: string, objectIDFieldNames: NSArray<string> | string[]): AGSTableQuerySublayerSource;

	readonly SQLQuery: string;

	geometryType: AGSGeometryType;

	readonly objectIDFieldNames: NSArray<string>;

	spatialReference: AGSSpatialReference;

	readonly workspaceID: string;

	constructor(o: { workspaceID: string; SQLQuery: string; objectIDFieldNames: NSArray<string> | string[]; });

	initWithWorkspaceIDSQLQueryObjectIDFieldNames(workspaceID: string, SQLQuery: string, objectIDFieldNames: NSArray<string> | string[]): this;
}

declare class AGSTableSublayerSource extends AGSSublayerSource {

	static alloc(): AGSTableSublayerSource; // inherited from NSObject

	static new(): AGSTableSublayerSource; // inherited from NSObject

	static tableSublayerSourceWithWorkspaceIDDataSourceName(workspaceID: string, dataSourceName: string): AGSTableSublayerSource;

	readonly dataSourceName: string;

	geodatabaseVersion: string;

	readonly workspaceID: string;

	constructor(o: { workspaceID: string; dataSourceName: string; });

	initWithWorkspaceIDDataSourceName(workspaceID: string, dataSourceName: string): this;
}

declare const enum AGSTextAntialiasingMode {

	None = 0,

	Normal = 1,

	Force = 2
}

declare class AGSTextSymbol extends AGSMarkerSymbol {

	static alloc(): AGSTextSymbol; // inherited from NSObject

	static new(): AGSTextSymbol; // inherited from NSObject

	static textSymbol(): AGSTextSymbol;

	static textSymbolWithTextColorSizeHorizontalAlignmentVerticalAlignment(text: string, color: UIColor, size: number, horizontalAlignment: AGSHorizontalAlignment, verticalAlignment: AGSVerticalAlignment): AGSTextSymbol;

	backgroundColor: UIColor;

	color: UIColor;

	fontDecoration: AGSFontDecoration;

	fontFamily: string;

	fontStyle: AGSFontStyle;

	fontWeight: AGSFontWeight;

	haloColor: UIColor;

	haloWidth: number;

	horizontalAlignment: AGSHorizontalAlignment;

	kerningEnabled: boolean;

	outlineColor: UIColor;

	outlineWidth: number;

	size: number;

	text: string;

	verticalAlignment: AGSVerticalAlignment;

	constructor(o: { text: string; color: UIColor; size: number; horizontalAlignment: AGSHorizontalAlignment; verticalAlignment: AGSVerticalAlignment; });

	initWithTextColorSizeHorizontalAlignmentVerticalAlignment(text: string, color: UIColor, size: number, horizontalAlignment: AGSHorizontalAlignment, verticalAlignment: AGSVerticalAlignment): this;
}

declare class AGSTileCache extends AGSLoadableBase implements NSCopying {

	static alloc(): AGSTileCache; // inherited from NSObject

	static new(): AGSTileCache; // inherited from NSObject

	static tileCacheWithFileURL(fileURL: NSURL): AGSTileCache;

	static tileCacheWithName(name: string): AGSTileCache;

	readonly antialiasing: boolean;

	readonly cacheStorageFormat: AGSCacheStorageFormat;

	readonly fileURL: NSURL;

	readonly fullExtent: AGSEnvelope;

	readonly thumbnail: UIImage;

	readonly tileInfo: AGSTileInfo;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { name: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithFileURL(fileURL: NSURL): this;

	initWithName(name: string): this;
}

declare const enum AGSTileImageFormat {

	PNG = 0,

	PNG8 = 1,

	PNG24 = 2,

	PNG32 = 3,

	JPG = 4,

	MIXED = 5,

	LERC = 6,

	Unknown = -1
}

declare class AGSTileInfo extends AGSObject {

	static alloc(): AGSTileInfo; // inherited from NSObject

	static new(): AGSTileInfo; // inherited from NSObject

	static tileInfoWithDPIFormatLevelsOfDetailOriginSpatialReferenceTileHeightTileWidth(DPI: number, format: AGSTileImageFormat, levelsOfDetail: NSArray<AGSLevelOfDetail> | AGSLevelOfDetail[], origin: AGSPoint, spatialReference: AGSSpatialReference, tileHeight: number, tileWidth: number): AGSTileInfo;

	readonly DPI: number;

	readonly compressionQuality: number;

	readonly format: AGSTileImageFormat;

	readonly levelsOfDetail: NSArray<AGSLevelOfDetail>;

	readonly origin: AGSPoint;

	readonly spatialReference: AGSSpatialReference;

	readonly tileHeight: number;

	readonly tileWidth: number;

	constructor(o: { DPI: number; format: AGSTileImageFormat; levelsOfDetail: NSArray<AGSLevelOfDetail> | AGSLevelOfDetail[]; origin: AGSPoint; spatialReference: AGSSpatialReference; tileHeight: number; tileWidth: number; });

	initWithDPIFormatLevelsOfDetailOriginSpatialReferenceTileHeightTileWidth(DPI: number, format: AGSTileImageFormat, levelsOfDetail: NSArray<AGSLevelOfDetail> | AGSLevelOfDetail[], origin: AGSPoint, spatialReference: AGSSpatialReference, tileHeight: number, tileWidth: number): this;
}

declare class AGSTileKey extends AGSObject {

	static alloc(): AGSTileKey; // inherited from NSObject

	static new(): AGSTileKey; // inherited from NSObject

	static tileKeyWithLevelColumnRow(level: number, column: number, row: number): AGSTileKey;

	readonly column: number;

	readonly level: number;

	readonly row: number;

	constructor(o: { level: number; column: number; row: number; });

	initWithLevelColumnRow(level: number, column: number, row: number): this;

	isEqualToTileKey(other: AGSTileKey): boolean;
}

interface AGSTimeAware {

	fullTimeExtent: AGSTimeExtent;

	supportsTimeFiltering: boolean;

	timeFilteringEnabled: boolean;

	timeInterval: AGSTimeValue;

	timeOffset: AGSTimeValue;
}
declare var AGSTimeAware: {

	prototype: AGSTimeAware;
};

declare class AGSTimeExtent extends AGSObject {

	static alloc(): AGSTimeExtent; // inherited from NSObject

	static new(): AGSTimeExtent; // inherited from NSObject

	static timeExtentWithStartTimeEndTime(startTime: Date, endTime: Date): AGSTimeExtent;

	static timeExtentWithTimeInstant(timeInstant: Date): AGSTimeExtent;

	readonly endTime: Date;

	readonly startTime: Date;

	constructor(o: { startTime: Date; endTime: Date; });

	constructor(o: { timeInstant: Date; });

	initWithStartTimeEndTime(startTime: Date, endTime: Date): this;

	initWithTimeInstant(timeInstant: Date): this;
}

declare class AGSTimeReference extends AGSObject {

	static alloc(): AGSTimeReference; // inherited from NSObject

	static new(): AGSTimeReference; // inherited from NSObject

	readonly respectsDaylightSavings: boolean;

	readonly timeZone: NSTimeZone;

	readonly timeZoneName: string;
}

declare const enum AGSTimeRelation {

	Unknown = -1,

	Overlaps = 0,

	AfterStartOverlapsEnd = 1,

	OverlapsStartWithinEnd = 2
}

declare const enum AGSTimeUnit {

	Unknown = -1,

	Centuries = 0,

	Days = 1,

	Decades = 2,

	Hours = 3,

	Milliseconds = 4,

	Minutes = 5,

	Months = 6,

	Seconds = 7,

	Weeks = 8,

	Years = 9
}

declare class AGSTimeValue extends AGSObject {

	static alloc(): AGSTimeValue; // inherited from NSObject

	static new(): AGSTimeValue; // inherited from NSObject

	static timeValueWithDurationUnit(duration: number, unit: AGSTimeUnit): AGSTimeValue;

	readonly duration: number;

	readonly unit: AGSTimeUnit;

	constructor(o: { duration: number; unit: AGSTimeUnit; });

	initWithDurationUnit(duration: number, unit: AGSTimeUnit): this;
}

declare class AGSTrackingDistance extends AGSObject {

	static alloc(): AGSTrackingDistance; // inherited from NSObject

	static new(): AGSTrackingDistance; // inherited from NSObject

	readonly displayText: string;

	readonly displayTextUnits: AGSLinearUnit;

	readonly distance: number;
}

declare class AGSTrackingProgress extends AGSObject {

	static alloc(): AGSTrackingProgress; // inherited from NSObject

	static new(): AGSTrackingProgress; // inherited from NSObject

	readonly remainingDistance: AGSTrackingDistance;

	readonly remainingGeometry: AGSPolyline;

	readonly remainingTime: number;

	readonly traversedGeometry: AGSPolyline;
}

declare class AGSTrackingStatus extends AGSObject {

	static alloc(): AGSTrackingStatus; // inherited from NSObject

	static new(): AGSTrackingStatus; // inherited from NSObject

	readonly currentManeuverIndex: number;

	readonly destinationProgress: AGSTrackingProgress;

	readonly destinationStatus: AGSDestinationStatus;

	readonly displayLocation: AGSLocation;

	readonly locationOnRoute: AGSLocation;

	readonly maneuverProgress: AGSTrackingProgress;

	readonly onRoute: boolean;

	readonly remainingDestinationCount: number;

	readonly routeCalculating: boolean;

	readonly routeProgress: AGSTrackingProgress;

	readonly routeResult: AGSRouteResult;
}

declare class AGSTransformationCatalog extends AGSObject {

	static alloc(): AGSTransformationCatalog; // inherited from NSObject

	static new(): AGSTransformationCatalog; // inherited from NSObject

	static projectionEngineDirectory(): NSURL;

	static setProjectionEngineDirectoryError(directory: NSURL): boolean;

	static transformationForInputSpatialReferenceOutputSpatialReference(inputSpatialReference: AGSSpatialReference, outputSpatialReference: AGSSpatialReference): AGSDatumTransformation;

	static transformationForInputSpatialReferenceOutputSpatialReferenceAreaOfInterest(inputSpatialReference: AGSSpatialReference, outputSpatialReference: AGSSpatialReference, areaOfInterest: AGSEnvelope): AGSDatumTransformation;

	static transformationsBySuitabilityWithInputSpatialReferenceOutputSpatialReference(inputSpatialReference: AGSSpatialReference, outputSpatialReference: AGSSpatialReference): NSArray<AGSDatumTransformation>;

	static transformationsBySuitabilityWithInputSpatialReferenceOutputSpatialReferenceAreaOfInterest(inputSpatialReference: AGSSpatialReference, outputSpatialReference: AGSSpatialReference, areaOfInterest: AGSEnvelope): NSArray<AGSDatumTransformation>;
}

declare class AGSTransformationMatrix extends AGSObject {

	static alloc(): AGSTransformationMatrix; // inherited from NSObject

	static new(): AGSTransformationMatrix; // inherited from NSObject

	static transformationMatrixWithQuaternionXQuaternionYQuaternionZQuaternionWTranslationXTranslationYTranslationZ(quaternionX: number, quaternionY: number, quaternionZ: number, quaternionW: number, translationX: number, translationY: number, translationZ: number): AGSTransformationMatrix;

	readonly quaternionW: number;

	readonly quaternionX: number;

	readonly quaternionY: number;

	readonly quaternionZ: number;

	readonly translationX: number;

	readonly translationY: number;

	readonly translationZ: number;

	static readonly identityMatrix: AGSTransformationMatrix;

	addTransformation(transformation: AGSTransformationMatrix): AGSTransformationMatrix;

	subtractTransformation(transformation: AGSTransformationMatrix): AGSTransformationMatrix;
}

declare class AGSTransformationMatrixCameraController extends AGSCameraController {

	static alloc(): AGSTransformationMatrixCameraController; // inherited from NSObject

	static new(): AGSTransformationMatrixCameraController; // inherited from NSObject

	static transformationMatrixCameraController(): AGSTransformationMatrixCameraController;

	static transformationMatrixCameraControllerWithOriginCamera(originCamera: AGSCamera): AGSTransformationMatrixCameraController;

	clippingDistance: number;

	originCamera: AGSCamera;

	transformationMatrix: AGSTransformationMatrix;

	translationFactor: number;

	constructor(o: { originCamera: AGSCamera; });

	initWithOriginCamera(originCamera: AGSCamera): this;
}

declare class AGSTransportationNetworkDataset extends AGSObject implements AGSGeodatabaseDataset {

	static alloc(): AGSTransportationNetworkDataset; // inherited from NSObject

	static new(): AGSTransportationNetworkDataset; // inherited from NSObject

	readonly alias: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly geodatabase: AGSGeodatabase; // inherited from AGSGeodatabaseDataset

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly name: string; // inherited from AGSGeodatabaseDataset

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum AGSTravelDirection {

	FromFacility = 0,

	ToFacility = 1
}

declare class AGSTravelMode extends AGSObject {

	static alloc(): AGSTravelMode; // inherited from NSObject

	static new(): AGSTravelMode; // inherited from NSObject

	static travelMode(): AGSTravelMode;

	attributeParameterValues: NSArray<AGSAttributeParameterValue>;

	distanceAttributeName: string;

	impedanceAttributeName: string;

	name: string;

	outputGeometryPrecision: number;

	restrictionAttributeNames: NSArray<string>;

	timeAttributeName: string;

	travelModeDescription: string;

	type: string;

	uTurnPolicy: AGSUTurnPolicy;

	useHierarchy: boolean;
}

declare class AGSUSNGGrid extends AGSGrid {

	static USNGGrid(): AGSUSNGGrid;

	static alloc(): AGSUSNGGrid; // inherited from NSObject

	static new(): AGSUSNGGrid; // inherited from NSObject

	labelUnit: AGSUSNGGridLabelUnit;
}

declare const enum AGSUSNGGridLabelUnit {

	KilometersMeters = 0,

	Meters = 1
}

declare const enum AGSUTMConversionMode {

	LatitudeBandIndicators = 0,

	NorthSouthIndicators = 1
}

declare class AGSUTMGrid extends AGSGrid {

	static UTMGrid(): AGSUTMGrid;

	static alloc(): AGSUTMGrid; // inherited from NSObject

	static new(): AGSUTMGrid; // inherited from NSObject
}

declare const enum AGSUTurnPolicy {

	NotAllowed = 0,

	AllowedAtDeadEnds = 1,

	AllowedAtIntersections = 2,

	AllowedAtDeadEndsAndIntersections = 3
}

declare class AGSUniqueValue extends AGSObject implements AGSJSONSerializable, NSCopying {

	static alloc(): AGSUniqueValue; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSUniqueValue; // inherited from NSObject

	static uniqueValue(): AGSUniqueValue;

	static uniqueValueWithDescriptionLabelSymbolValues(description: string, label: string, symbol: AGSSymbol, values: NSArray<any> | any[]): AGSUniqueValue;

	label: string;

	symbol: AGSSymbol;

	valueDescription: string;

	values: NSArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { description: string; label: string; symbol: AGSSymbol; values: NSArray<any> | any[]; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDescriptionLabelSymbolValues(description: string, label: string, symbol: AGSSymbol, values: NSArray<any> | any[]): this;

	isEqual(object: any): boolean;

	isEqualToUniqueValue(other: AGSUniqueValue): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare class AGSUniqueValueRenderer extends AGSRenderer {

	static alloc(): AGSUniqueValueRenderer; // inherited from NSObject

	static new(): AGSUniqueValueRenderer; // inherited from NSObject

	static uniqueValueRenderer(): AGSUniqueValueRenderer;

	static uniqueValueRendererWithFieldNamesUniqueValuesDefaultLabelDefaultSymbol(fieldNames: NSArray<string> | string[], uniqueValues: NSArray<AGSUniqueValue> | AGSUniqueValue[], defaultLabel: string, defaultSymbol: AGSSymbol): AGSUniqueValueRenderer;

	defaultLabel: string;

	defaultSymbol: AGSSymbol;

	fieldNames: NSArray<string>;

	uniqueValues: NSArray<AGSUniqueValue>;

	constructor(o: { fieldNames: NSArray<string> | string[]; uniqueValues: NSArray<AGSUniqueValue> | AGSUniqueValue[]; defaultLabel: string; defaultSymbol: AGSSymbol; });

	initWithFieldNamesUniqueValuesDefaultLabelDefaultSymbol(fieldNames: NSArray<string> | string[], uniqueValues: NSArray<AGSUniqueValue> | AGSUniqueValue[], defaultLabel: string, defaultSymbol: AGSSymbol): this;
}

declare class AGSUnit extends AGSObject {

	static alloc(): AGSUnit; // inherited from NSObject

	static new(): AGSUnit; // inherited from NSObject

	readonly abbreviation: string;

	readonly displayName: string;

	readonly name: string;

	readonly pluralDisplayName: string;

	isEqualToUnit(unit: AGSUnit): boolean;
}

declare const enum AGSUnitSystem {

	Unknown = -1,

	Imperial = 0,

	Metric = 1
}

declare class AGSUnknownLayer extends AGSLayer {

	static alloc(): AGSUnknownLayer; // inherited from NSObject

	static new(): AGSUnknownLayer; // inherited from NSObject
}

declare class AGSUnsupportedLayer extends AGSLayer {

	static alloc(): AGSUnsupportedLayer; // inherited from NSObject

	static new(): AGSUnsupportedLayer; // inherited from NSObject
}

declare class AGSUnsupportedSymbol extends AGSSymbol {

	static alloc(): AGSUnsupportedSymbol; // inherited from NSObject

	static new(): AGSUnsupportedSymbol; // inherited from NSObject
}

declare class AGSUtilityAssetGroup extends AGSObject {

	static alloc(): AGSUtilityAssetGroup; // inherited from NSObject

	static new(): AGSUtilityAssetGroup; // inherited from NSObject

	readonly assetTypes: NSArray<AGSUtilityAssetType>;

	readonly code: number;

	readonly name: string;

	assetTypeWithName(name: string): AGSUtilityAssetType;
}

declare class AGSUtilityAssetType extends AGSObject {

	static alloc(): AGSUtilityAssetType; // inherited from NSObject

	static new(): AGSUtilityAssetType; // inherited from NSObject

	readonly associationRole: AGSUtilityAssociationRole;

	readonly categories: NSArray<AGSUtilityCategory>;

	readonly code: number;

	readonly containerViewScale: number;

	readonly name: string;

	readonly terminalConfiguration: AGSUtilityTerminalConfiguration;
}

declare class AGSUtilityAssociation extends AGSObject {

	static alloc(): AGSUtilityAssociation; // inherited from NSObject

	static new(): AGSUtilityAssociation; // inherited from NSObject

	readonly associationType: AGSUtilityAssociationType;

	readonly containmentVisible: boolean;

	readonly fromElement: AGSUtilityElement;

	readonly globalID: NSUUID;

	readonly toElement: AGSUtilityElement;
}

declare const enum AGSUtilityAssociationRole {

	None = 0,

	Container = 1,

	Structure = 2
}

declare const enum AGSUtilityAssociationType {

	Connectivity = 1,

	Containment = 2,

	Attachment = 3
}

declare const enum AGSUtilityAttributeComparisonOperator {

	Equal = 0,

	NotEqual = 1,

	GreaterThan = 2,

	GreaterThanEqual = 3,

	LessThan = 4,

	LessThanEqual = 5,

	IncludesTheValues = 6,

	DoesNotIncludeTheValues = 7,

	IncludesAny = 8,

	DoesNotIncludeAny = 9
}

declare class AGSUtilityCategory extends AGSObject {

	static alloc(): AGSUtilityCategory; // inherited from NSObject

	static new(): AGSUtilityCategory; // inherited from NSObject

	readonly name: string;
}

declare class AGSUtilityCategoryComparison extends AGSUtilityTraceConditionalExpression {

	static alloc(): AGSUtilityCategoryComparison; // inherited from NSObject

	static new(): AGSUtilityCategoryComparison; // inherited from NSObject

	static utilityCategoryComparisonWithCategoryComparisonOperator(category: AGSUtilityCategory, comparisonOperator: AGSUtilityCategoryComparisonOperator): AGSUtilityCategoryComparison;

	readonly category: AGSUtilityCategory;

	readonly comparisonOperator: AGSUtilityCategoryComparisonOperator;

	constructor(o: { category: AGSUtilityCategory; comparisonOperator: AGSUtilityCategoryComparisonOperator; });

	initWithCategoryComparisonOperator(category: AGSUtilityCategory, comparisonOperator: AGSUtilityCategoryComparisonOperator): this;
}

declare const enum AGSUtilityCategoryComparisonOperator {

	Exists = 0,

	DoesNotExist = 1
}

declare class AGSUtilityDomainNetwork extends AGSObject {

	static alloc(): AGSUtilityDomainNetwork; // inherited from NSObject

	static new(): AGSUtilityDomainNetwork; // inherited from NSObject

	readonly alias: string;

	readonly domainNetworkID: number;

	readonly name: string;

	readonly networkSources: NSArray<AGSUtilityNetworkSource>;

	readonly structureNetwork: boolean;

	readonly subnetworkControllerType: AGSUtilitySubnetworkControllerType;

	readonly tierGroups: NSArray<AGSUtilityTierGroup>;

	readonly tierType: AGSUtilityTierType;

	readonly tiers: NSArray<AGSUtilityTier>;

	tierGroupWithName(name: string): AGSUtilityTierGroup;

	tierWithName(name: string): AGSUtilityTier;
}

declare class AGSUtilityElement extends AGSObject {

	static alloc(): AGSUtilityElement; // inherited from NSObject

	static new(): AGSUtilityElement; // inherited from NSObject

	readonly assetGroup: AGSUtilityAssetGroup;

	readonly assetType: AGSUtilityAssetType;

	fractionAlongEdge: number;

	readonly globalID: NSUUID;

	readonly networkSource: AGSUtilityNetworkSource;

	readonly objectID: number;

	terminal: AGSUtilityTerminal;
}

declare class AGSUtilityElementTraceResult extends AGSUtilityTraceResult {

	static alloc(): AGSUtilityElementTraceResult; // inherited from NSObject

	static new(): AGSUtilityElementTraceResult; // inherited from NSObject

	readonly elements: NSArray<AGSUtilityElement>;
}

declare class AGSUtilityNetwork extends AGSLoadableBase implements AGSRemoteResource {

	static alloc(): AGSUtilityNetwork; // inherited from NSObject

	static new(): AGSUtilityNetwork; // inherited from NSObject

	static utilityNetworkWithURL(URL: NSURL): AGSUtilityNetwork;

	static utilityNetworkWithURLMap(URL: NSURL, map: AGSMap): AGSUtilityNetwork;

	readonly definition: AGSUtilityNetworkDefinition;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	constructor(o: { URL: NSURL; map: AGSMap; });

	associationsWithElementCompletion(element: AGSUtilityElement, completion: (p1: NSArray<AGSUtilityAssociation>, p2: NSError) => void): AGSCancelable;

	associationsWithElementTypeCompletion(element: AGSUtilityElement, type: AGSUtilityAssociationType, completion: (p1: NSArray<AGSUtilityAssociation>, p2: NSError) => void): AGSCancelable;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createElementWithAssetTypeGlobalID(assetType: AGSUtilityAssetType, globalID: NSUUID): AGSUtilityElement;

	createElementWithAssetTypeGlobalIDTerminal(assetType: AGSUtilityAssetType, globalID: NSUUID, terminal: AGSUtilityTerminal): AGSUtilityElement;

	createElementWithFeature(feature: AGSArcGISFeature): AGSUtilityElement;

	createElementWithFeatureTerminal(feature: AGSArcGISFeature, terminal: AGSUtilityTerminal): AGSUtilityElement;

	featuresForElementsCompletion(elements: NSArray<AGSUtilityElement> | AGSUtilityElement[], completion: (p1: NSArray<AGSArcGISFeature>, p2: NSError) => void): AGSCancelable;

	initWithURL(URL: NSURL): this;

	initWithURLMap(URL: NSURL, map: AGSMap): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	traceWithParametersCompletion(traceParameters: AGSUtilityTraceParameters, completion: (p1: NSArray<AGSUtilityTraceResult>, p2: NSError) => void): AGSCancelable;
}

declare class AGSUtilityNetworkAttribute extends AGSObject {

	static alloc(): AGSUtilityNetworkAttribute; // inherited from NSObject

	static new(): AGSUtilityNetworkAttribute; // inherited from NSObject

	readonly apportionable: boolean;

	readonly dataType: AGSUtilityNetworkAttributeDataType;

	readonly domain: AGSDomain;

	readonly name: string;

	readonly networkAttributeToSubstitute: AGSUtilityNetworkAttribute;

	readonly substitution: boolean;

	readonly systemDefined: boolean;
}

declare class AGSUtilityNetworkAttributeComparison extends AGSUtilityTraceConditionalExpression {

	static alloc(): AGSUtilityNetworkAttributeComparison; // inherited from NSObject

	static new(): AGSUtilityNetworkAttributeComparison; // inherited from NSObject

	static utilityNetworkAttributeComparisonWithNetworkAttributeComparisonOperatorOtherNetworkAttribute(networkAttribute: AGSUtilityNetworkAttribute, comparisonOperator: AGSUtilityAttributeComparisonOperator, otherNetworkAttribute: AGSUtilityNetworkAttribute): AGSUtilityNetworkAttributeComparison;

	static utilityNetworkAttributeComparisonWithNetworkAttributeComparisonOperatorValue(networkAttribute: AGSUtilityNetworkAttribute, comparisonOperator: AGSUtilityAttributeComparisonOperator, value: any): AGSUtilityNetworkAttributeComparison;

	readonly comparisonOperator: AGSUtilityAttributeComparisonOperator;

	readonly networkAttribute: AGSUtilityNetworkAttribute;

	readonly otherNetworkAttribute: AGSUtilityNetworkAttribute;

	readonly value: any;

	constructor(o: { networkAttribute: AGSUtilityNetworkAttribute; comparisonOperator: AGSUtilityAttributeComparisonOperator; otherNetworkAttribute: AGSUtilityNetworkAttribute; });

	constructor(o: { networkAttribute: AGSUtilityNetworkAttribute; comparisonOperator: AGSUtilityAttributeComparisonOperator; value: any; });

	initWithNetworkAttributeComparisonOperatorOtherNetworkAttribute(networkAttribute: AGSUtilityNetworkAttribute, comparisonOperator: AGSUtilityAttributeComparisonOperator, otherNetworkAttribute: AGSUtilityNetworkAttribute): this;

	initWithNetworkAttributeComparisonOperatorValue(networkAttribute: AGSUtilityNetworkAttribute, comparisonOperator: AGSUtilityAttributeComparisonOperator, value: any): this;
}

declare const enum AGSUtilityNetworkAttributeDataType {

	Integer = 0,

	Float = 1,

	Double = 2,

	Boolean = 3
}

declare class AGSUtilityNetworkDefinition extends AGSObject {

	static alloc(): AGSUtilityNetworkDefinition; // inherited from NSObject

	static new(): AGSUtilityNetworkDefinition; // inherited from NSObject

	readonly categories: NSArray<AGSUtilityCategory>;

	readonly domainNetworks: NSArray<AGSUtilityDomainNetwork>;

	readonly networkAttributes: NSArray<AGSUtilityNetworkAttribute>;

	readonly networkSources: NSArray<AGSUtilityNetworkSource>;

	readonly schemaVersion: number;

	readonly terminalConfigurations: NSArray<AGSUtilityTerminalConfiguration>;

	domainNetworkWithDomainNetworkName(domainNetworkName: string): AGSUtilityDomainNetwork;

	networkAttributeWithName(name: string): AGSUtilityNetworkAttribute;

	networkSourceWithName(name: string): AGSUtilityNetworkSource;
}

declare class AGSUtilityNetworkSource extends AGSObject {

	static alloc(): AGSUtilityNetworkSource; // inherited from NSObject

	static new(): AGSUtilityNetworkSource; // inherited from NSObject

	readonly assetGroups: NSArray<AGSUtilityAssetGroup>;

	readonly featureTable: AGSArcGISFeatureTable;

	readonly name: string;

	readonly sourceID: number;

	readonly sourceType: AGSUtilityNetworkSourceType;

	readonly sourceUsageType: AGSUtilityNetworkSourceUsageType;

	assetGroupWithName(name: string): AGSUtilityAssetGroup;
}

declare const enum AGSUtilityNetworkSourceType {

	Junction = 0,

	Edge = 1
}

declare const enum AGSUtilityNetworkSourceUsageType {

	Device = 0,

	Junction = 1,

	Line = 2,

	Assembly = 3,

	SubnetLine = 4,

	StructureJunction = 5,

	StructureLine = 6,

	StructureBoundary = 7
}

declare class AGSUtilityPropagator extends AGSObject {

	static alloc(): AGSUtilityPropagator; // inherited from NSObject

	static new(): AGSUtilityPropagator; // inherited from NSObject

	static utilityPropagatorWithNetworkAttributePropagatorFunctionTypeComparisonOperatorValue(networkAttribute: AGSUtilityNetworkAttribute, propagatorFunctionType: AGSUtilityPropagatorFunctionType, comparisonOperator: AGSUtilityAttributeComparisonOperator, value: any): AGSUtilityPropagator;

	static utilityPropagatorWithNetworkAttributePropagatorFunctionTypeComparisonOperatorValueSubstitutionAttribute(networkAttribute: AGSUtilityNetworkAttribute, propagatorFunctionType: AGSUtilityPropagatorFunctionType, comparisonOperator: AGSUtilityAttributeComparisonOperator, value: any, substitutionAttribute: AGSUtilityNetworkAttribute): AGSUtilityPropagator;

	readonly comparisonOperator: AGSUtilityAttributeComparisonOperator;

	readonly networkAttribute: AGSUtilityNetworkAttribute;

	readonly propagatorFunctionType: AGSUtilityPropagatorFunctionType;

	readonly substitutionNetworkAttribute: AGSUtilityNetworkAttribute;

	readonly value: any;

	constructor(o: { networkAttribute: AGSUtilityNetworkAttribute; propagatorFunctionType: AGSUtilityPropagatorFunctionType; comparisonOperator: AGSUtilityAttributeComparisonOperator; value: any; });

	constructor(o: { networkAttribute: AGSUtilityNetworkAttribute; propagatorFunctionType: AGSUtilityPropagatorFunctionType; comparisonOperator: AGSUtilityAttributeComparisonOperator; value: any; substitutionAttribute: AGSUtilityNetworkAttribute; });

	initWithNetworkAttributePropagatorFunctionTypeComparisonOperatorValue(networkAttribute: AGSUtilityNetworkAttribute, propagatorFunctionType: AGSUtilityPropagatorFunctionType, comparisonOperator: AGSUtilityAttributeComparisonOperator, value: any): this;

	initWithNetworkAttributePropagatorFunctionTypeComparisonOperatorValueSubstitutionAttribute(networkAttribute: AGSUtilityNetworkAttribute, propagatorFunctionType: AGSUtilityPropagatorFunctionType, comparisonOperator: AGSUtilityAttributeComparisonOperator, value: any, substitutionAttribute: AGSUtilityNetworkAttribute): this;
}

declare const enum AGSUtilityPropagatorFunctionType {

	BitwiseAnd = 1,

	Max = 2,

	Min = 3
}

declare const enum AGSUtilitySubnetworkControllerType {

	None = 0,

	Source = 1,

	Sink = 2
}

declare class AGSUtilityTerminal extends AGSObject {

	static alloc(): AGSUtilityTerminal; // inherited from NSObject

	static new(): AGSUtilityTerminal; // inherited from NSObject

	readonly name: string;

	readonly terminalID: number;
}

declare class AGSUtilityTerminalConfiguration extends AGSObject {

	static alloc(): AGSUtilityTerminalConfiguration; // inherited from NSObject

	static new(): AGSUtilityTerminalConfiguration; // inherited from NSObject

	readonly name: string;

	readonly terminalConfigurationID: number;

	readonly terminals: NSArray<AGSUtilityTerminal>;
}

declare class AGSUtilityTier extends AGSObject {

	static alloc(): AGSUtilityTier; // inherited from NSObject

	static new(): AGSUtilityTier; // inherited from NSObject

	readonly name: string;

	readonly rank: number;

	readonly topologyType: AGSUtilityTierTopologyType;

	readonly traceConfiguration: AGSUtilityTraceConfiguration;
}

declare class AGSUtilityTierGroup extends AGSObject {

	static alloc(): AGSUtilityTierGroup; // inherited from NSObject

	static new(): AGSUtilityTierGroup; // inherited from NSObject

	readonly name: string;

	readonly tiers: NSArray<AGSUtilityTier>;

	tierWithName(name: string): AGSUtilityTier;
}

declare const enum AGSUtilityTierTopologyType {

	Radial = 1,

	Mesh = 2
}

declare const enum AGSUtilityTierType {

	Hierarchical = 1,

	Partitioned = 2
}

declare class AGSUtilityTraceAndCondition extends AGSUtilityTraceConditionalExpression {

	static alloc(): AGSUtilityTraceAndCondition; // inherited from NSObject

	static new(): AGSUtilityTraceAndCondition; // inherited from NSObject

	static utilityTraceAndConditionWithLeftExpressionRightExpression(leftExpression: AGSUtilityTraceConditionalExpression, rightExpression: AGSUtilityTraceConditionalExpression): AGSUtilityTraceAndCondition;

	readonly leftExpression: AGSUtilityTraceConditionalExpression;

	readonly rightExpression: AGSUtilityTraceConditionalExpression;

	constructor(o: { leftExpression: AGSUtilityTraceConditionalExpression; rightExpression: AGSUtilityTraceConditionalExpression; });

	initWithLeftExpressionRightExpression(leftExpression: AGSUtilityTraceConditionalExpression, rightExpression: AGSUtilityTraceConditionalExpression): this;
}

declare class AGSUtilityTraceCondition extends AGSObject {

	static alloc(): AGSUtilityTraceCondition; // inherited from NSObject

	static new(): AGSUtilityTraceCondition; // inherited from NSObject
}

declare class AGSUtilityTraceConditionalExpression extends AGSUtilityTraceCondition {

	static alloc(): AGSUtilityTraceConditionalExpression; // inherited from NSObject

	static new(): AGSUtilityTraceConditionalExpression; // inherited from NSObject
}

declare class AGSUtilityTraceConfiguration extends AGSObject {

	static alloc(): AGSUtilityTraceConfiguration; // inherited from NSObject

	static new(): AGSUtilityTraceConfiguration; // inherited from NSObject

	static utilityTraceConfiguration(): AGSUtilityTraceConfiguration;

	domainNetwork: AGSUtilityDomainNetwork;

	ignoreBarriersAtStartingPoints: boolean;

	includeBarriers: boolean;

	includeContainers: boolean;

	includeContent: boolean;

	includeStructures: boolean;

	propagators: NSArray<AGSUtilityPropagator>;

	sourceTier: AGSUtilityTier;

	targetTier: AGSUtilityTier;

	traversability: AGSUtilityTraversability;

	validateConsistency: boolean;
}

declare class AGSUtilityTraceFunction extends AGSObject {

	static alloc(): AGSUtilityTraceFunction; // inherited from NSObject

	static new(): AGSUtilityTraceFunction; // inherited from NSObject

	static utilityTraceFunctionWithFunctionTypeNetworkAttribute(functionType: AGSUtilityTraceFunctionType, networkAttribute: AGSUtilityNetworkAttribute): AGSUtilityTraceFunction;

	readonly functionType: AGSUtilityTraceFunctionType;

	readonly networkAttribute: AGSUtilityNetworkAttribute;

	constructor(o: { functionType: AGSUtilityTraceFunctionType; networkAttribute: AGSUtilityNetworkAttribute; });

	initWithFunctionTypeNetworkAttribute(functionType: AGSUtilityTraceFunctionType, networkAttribute: AGSUtilityNetworkAttribute): this;
}

declare class AGSUtilityTraceFunctionBarrier extends AGSObject {

	static alloc(): AGSUtilityTraceFunctionBarrier; // inherited from NSObject

	static new(): AGSUtilityTraceFunctionBarrier; // inherited from NSObject

	static utilityTraceFunctionBarrierWithTraceFunctionComparisonOperatorValue(traceFunction: AGSUtilityTraceFunction, comparisonOperator: AGSUtilityAttributeComparisonOperator, value: any): AGSUtilityTraceFunctionBarrier;

	readonly comparisonOperator: AGSUtilityAttributeComparisonOperator;

	readonly traceFunction: AGSUtilityTraceFunction;

	readonly value: any;

	constructor(o: { traceFunction: AGSUtilityTraceFunction; comparisonOperator: AGSUtilityAttributeComparisonOperator; value: any; });

	initWithTraceFunctionComparisonOperatorValue(traceFunction: AGSUtilityTraceFunction, comparisonOperator: AGSUtilityAttributeComparisonOperator, value: any): this;
}

declare const enum AGSUtilityTraceFunctionType {

	Add = 1,

	Average = 2,

	Count = 3,

	Max = 4,

	Min = 5,

	Subtract = 6
}

declare class AGSUtilityTraceOrCondition extends AGSUtilityTraceConditionalExpression {

	static alloc(): AGSUtilityTraceOrCondition; // inherited from NSObject

	static new(): AGSUtilityTraceOrCondition; // inherited from NSObject

	static utilityTraceOrConditionWithLeftExpressionRightExpression(leftExpression: AGSUtilityTraceConditionalExpression, rightExpression: AGSUtilityTraceConditionalExpression): AGSUtilityTraceOrCondition;

	readonly leftExpression: AGSUtilityTraceConditionalExpression;

	readonly rightExpression: AGSUtilityTraceConditionalExpression;

	constructor(o: { leftExpression: AGSUtilityTraceConditionalExpression; rightExpression: AGSUtilityTraceConditionalExpression; });

	initWithLeftExpressionRightExpression(leftExpression: AGSUtilityTraceConditionalExpression, rightExpression: AGSUtilityTraceConditionalExpression): this;
}

declare class AGSUtilityTraceParameters extends AGSObject {

	static alloc(): AGSUtilityTraceParameters; // inherited from NSObject

	static new(): AGSUtilityTraceParameters; // inherited from NSObject

	static utilityTraceParametersWithTraceTypeStartingLocations(traceType: AGSUtilityTraceType, startingLocations: NSArray<AGSUtilityElement> | AGSUtilityElement[]): AGSUtilityTraceParameters;

	barriers: NSArray<AGSUtilityElement>;

	resultTypes: NSArray<NSValue>;

	startingLocations: NSArray<AGSUtilityElement>;

	traceConfiguration: AGSUtilityTraceConfiguration;

	readonly traceType: AGSUtilityTraceType;

	constructor(o: { traceType: AGSUtilityTraceType; startingLocations: NSArray<AGSUtilityElement> | AGSUtilityElement[]; });

	initWithTraceTypeStartingLocations(traceType: AGSUtilityTraceType, startingLocations: NSArray<AGSUtilityElement> | AGSUtilityElement[]): this;
}

declare class AGSUtilityTraceResult extends AGSObject {

	static alloc(): AGSUtilityTraceResult; // inherited from NSObject

	static new(): AGSUtilityTraceResult; // inherited from NSObject

	readonly warnings: NSArray<string>;
}

declare const enum AGSUtilityTraceResultType {

	Elements = 0
}

declare const enum AGSUtilityTraceType {

	Connected = 0,

	Subnetwork = 1,

	Upstream = 2,

	Downstream = 3
}

declare class AGSUtilityTraversability extends AGSObject {

	static alloc(): AGSUtilityTraversability; // inherited from NSObject

	static new(): AGSUtilityTraversability; // inherited from NSObject

	static utilityTraversability(): AGSUtilityTraversability;

	barriers: AGSUtilityTraceCondition;

	functionBarriers: NSArray<AGSUtilityTraceFunctionBarrier>;

	scope: AGSUtilityTraversabilityScope;
}

declare const enum AGSUtilityTraversabilityScope {

	JunctionsAndEdges = 0,

	Junctions = 1,

	Edges = 2
}

declare class AGSVectorMarkerSymbolElement extends AGSObject {

	static alloc(): AGSVectorMarkerSymbolElement; // inherited from NSObject

	static new(): AGSVectorMarkerSymbolElement; // inherited from NSObject

	static vectorMarkerSymbolElementWithGeometryMultilayerSymbol(geometry: AGSGeometry, multilayerSymbol: AGSMultilayerSymbol): AGSVectorMarkerSymbolElement;

	geometry: AGSGeometry;

	symbol: AGSMultilayerSymbol;

	constructor(o: { geometry: AGSGeometry; multilayerSymbol: AGSMultilayerSymbol; });

	initWithGeometryMultilayerSymbol(geometry: AGSGeometry, multilayerSymbol: AGSMultilayerSymbol): this;
}

declare class AGSVectorMarkerSymbolLayer extends AGSMarkerSymbolLayer {

	static alloc(): AGSVectorMarkerSymbolLayer; // inherited from NSObject

	static new(): AGSVectorMarkerSymbolLayer; // inherited from NSObject

	static vectorMarkerSymbolLayerWithVectorMarkerSymbolElements(vectorMarkerSymbolElements: NSArray<AGSVectorMarkerSymbolElement> | AGSVectorMarkerSymbolElement[]): AGSVectorMarkerSymbolLayer;

	vectorMarkerSymbolElements: NSArray<AGSVectorMarkerSymbolElement>;

	constructor(o: { vectorMarkerSymbolElements: NSArray<AGSVectorMarkerSymbolElement> | AGSVectorMarkerSymbolElement[]; });

	initWithVectorMarkerSymbolElements(vectorMarkerSymbolElements: NSArray<AGSVectorMarkerSymbolElement> | AGSVectorMarkerSymbolElement[]): this;
}

declare class AGSVectorTileCache extends AGSLoadableBase {

	static alloc(): AGSVectorTileCache; // inherited from NSObject

	static new(): AGSVectorTileCache; // inherited from NSObject

	static vectorTileCacheWithFileURL(fileURL: NSURL): AGSVectorTileCache;

	static vectorTileCacheWithName(name: string): AGSVectorTileCache;

	readonly fileURL: NSURL;

	readonly sourceInfo: AGSVectorTileSourceInfo;

	readonly thumbnail: UIImage;

	constructor(o: { fileURL: NSURL; });

	constructor(o: { name: string; });

	initWithFileURL(fileURL: NSURL): this;

	initWithName(name: string): this;
}

declare class AGSVectorTileSourceInfo extends AGSObject {

	static alloc(): AGSVectorTileSourceInfo; // inherited from NSObject

	static new(): AGSVectorTileSourceInfo; // inherited from NSObject

	readonly URL: NSURL;

	readonly defaultStyle: AGSVectorTileStyle;

	readonly defaultStyleURL: NSURL;

	readonly exportTilesAllowed: boolean;

	readonly fullExtent: AGSEnvelope;

	readonly initialExtent: AGSEnvelope;

	readonly levelsOfDetail: NSArray<AGSLevelOfDetail>;

	readonly maxExportTilesCount: number;

	readonly maxScale: number;

	readonly minScale: number;

	readonly name: string;

	readonly origin: AGSPoint;

	readonly spatialReference: AGSSpatialReference;

	readonly version: string;
}

declare class AGSVectorTileStyle extends AGSObject {

	static alloc(): AGSVectorTileStyle; // inherited from NSObject

	static new(): AGSVectorTileStyle; // inherited from NSObject

	readonly sourceURL: NSURL;

	readonly version: string;
}

declare const enum AGSVerticalAlignment {

	Baseline = 0,

	Bottom = 1,

	Middle = 2,

	Top = 3
}

declare class AGSViewControllerBase extends UIViewController {

	static alloc(): AGSViewControllerBase; // inherited from NSObject

	static new(): AGSViewControllerBase; // inherited from NSObject
}

declare class AGSViewLabelProperties extends AGSObject {

	static alloc(): AGSViewLabelProperties; // inherited from NSObject

	static new(): AGSViewLabelProperties; // inherited from NSObject

	static viewLabelPropertiesWithAnimationEnabledLabelingEnabled(animationEnabled: boolean, labelingEnabled: boolean): AGSViewLabelProperties;

	animationEnabled: boolean;

	labelingEnabled: boolean;

	constructor(o: { animationEnabled: boolean; labelingEnabled: boolean; });

	initWithAnimationEnabledLabelingEnabled(animationEnabled: boolean, labelingEnabled: boolean): this;
}

declare class AGSViewpoint extends AGSObject implements AGSJSONSerializable {

	static alloc(): AGSViewpoint; // inherited from NSObject

	static fromJSONError(JSONObject: any): AGSJSONSerializable;

	static new(): AGSViewpoint; // inherited from NSObject

	static viewpointWithCenterScale(center: AGSPoint, scale: number): AGSViewpoint;

	static viewpointWithCenterScaleCamera(center: AGSPoint, scale: number, camera: AGSCamera): AGSViewpoint;

	static viewpointWithCenterScaleRotation(center: AGSPoint, scale: number, rotation: number): AGSViewpoint;

	static viewpointWithCenterScaleRotationCamera(center: AGSPoint, scale: number, rotation: number, camera: AGSCamera): AGSViewpoint;

	static viewpointWithLatitudeLongitudeScale(latitude: number, longitude: number, scale: number): AGSViewpoint;

	static viewpointWithLatitudeLongitudeScaleCamera(latitude: number, longitude: number, scale: number, camera: AGSCamera): AGSViewpoint;

	static viewpointWithTargetExtent(targetExtent: AGSEnvelope): AGSViewpoint;

	static viewpointWithTargetExtentCamera(targetExtent: AGSEnvelope, camera: AGSCamera): AGSViewpoint;

	static viewpointWithTargetExtentRotation(targetExtent: AGSEnvelope, rotation: number): AGSViewpoint;

	static viewpointWithTargetExtentRotationCamera(targetExtent: AGSEnvelope, rotation: number, camera: AGSCamera): AGSViewpoint;

	readonly camera: AGSCamera;

	readonly rotation: number;

	readonly targetGeometry: AGSGeometry;

	readonly targetScale: number;

	readonly viewpointType: AGSViewpointType;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unknownJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly unsupportedJSON: NSDictionary<string, any>; // inherited from AGSJSONSerializable

	readonly  // inherited from NSObjectProtocol

	constructor(o: { center: AGSPoint; scale: number; });

	constructor(o: { center: AGSPoint; scale: number; camera: AGSCamera; });

	constructor(o: { center: AGSPoint; scale: number; rotation: number; });

	constructor(o: { center: AGSPoint; scale: number; rotation: number; camera: AGSCamera; });

	constructor(o: { latitude: number; longitude: number; scale: number; });

	constructor(o: { latitude: number; longitude: number; scale: number; camera: AGSCamera; });

	constructor(o: { targetExtent: AGSEnvelope; });

	constructor(o: { targetExtent: AGSEnvelope; camera: AGSCamera; });

	constructor(o: { targetExtent: AGSEnvelope; rotation: number; });

	constructor(o: { targetExtent: AGSEnvelope; rotation: number; camera: AGSCamera; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCenterScale(center: AGSPoint, scale: number): this;

	initWithCenterScaleCamera(center: AGSPoint, scale: number, camera: AGSCamera): this;

	initWithCenterScaleRotation(center: AGSPoint, scale: number, rotation: number): this;

	initWithCenterScaleRotationCamera(center: AGSPoint, scale: number, rotation: number, camera: AGSCamera): this;

	initWithLatitudeLongitudeScale(latitude: number, longitude: number, scale: number): this;

	initWithLatitudeLongitudeScaleCamera(latitude: number, longitude: number, scale: number, camera: AGSCamera): this;

	initWithTargetExtent(targetExtent: AGSEnvelope): this;

	initWithTargetExtentCamera(targetExtent: AGSEnvelope, camera: AGSCamera): this;

	initWithTargetExtentRotation(targetExtent: AGSEnvelope, rotation: number): this;

	initWithTargetExtentRotationCamera(targetExtent: AGSEnvelope, rotation: number, camera: AGSCamera): this;

	isEqual(object: any): boolean;

	isEqualToViewpoint(other: AGSViewpoint): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): any;
}

declare const enum AGSViewpointType {

	CenterAndScale = 0,

	BoundingGeometry = 1,

	Unknown = -1
}

declare class AGSViewshed extends AGSAnalysis {

	static alloc(): AGSViewshed; // inherited from NSObject

	static frustumOutlineColor(): UIColor;

	static new(): AGSViewshed; // inherited from NSObject

	static obstructedColor(): UIColor;

	static setFrustumOutlineColor(frustumOutlineColor: UIColor): void;

	static setObstructedColor(obstructedColor: UIColor): void;

	static setVisibleColor(visibleColor: UIColor): void;

	static visibleColor(): UIColor;

	frustumOutlineVisible: boolean;

	horizontalAngle: number;

	maxDistance: number;

	minDistance: number;

	verticalAngle: number;
}

declare class AGSVoiceGuidance extends AGSObject {

	static alloc(): AGSVoiceGuidance; // inherited from NSObject

	static new(): AGSVoiceGuidance; // inherited from NSObject

	readonly text: string;

	readonly type: AGSVoiceGuidanceType;
}

declare const enum AGSVoiceGuidanceType {

	ApproachingManeuver = 0,

	AtManeuver = 1,

	ApproachingDestination = 2
}

declare class AGSWFSFeatureTable extends AGSFeatureTable implements AGSRemoteResource {

	static WFSFeatureTableWithLayerInfo(layerInfo: AGSWFSLayerInfo): AGSWFSFeatureTable;

	static WFSFeatureTableWithURLTableName(URL: NSURL, tableName: string): AGSWFSFeatureTable;

	static alloc(): AGSWFSFeatureTable; // inherited from NSObject

	static new(): AGSWFSFeatureTable; // inherited from NSObject

	axisOrder: AGSOGCAxisOrder;

	featureRequestMode: AGSFeatureRequestMode;

	filterAxisOrder: AGSOGCAxisOrder;

	readonly layerInfo: AGSWFSLayerInfo;

	preferredSpatialReference: AGSSpatialReference;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { layerInfo: AGSWFSLayerInfo; });

	constructor(o: { URL: NSURL; tableName: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithLayerInfo(layerInfo: AGSWFSLayerInfo): this;

	initWithURLTableName(URL: NSURL, tableName: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	populateFromServiceWithParametersClearCacheOutFieldsCompletion(parameters: AGSQueryParameters, clearCache: boolean, outFields: NSArray<string> | string[], completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	populateFromServiceWithRequestXMLClearCacheCompletion(requestXML: string, clearCache: boolean, completion: (p1: AGSFeatureQueryResult, p2: NSError) => void): AGSCancelable;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSWFSLayerInfo extends AGSObject {

	static alloc(): AGSWFSLayerInfo; // inherited from NSObject

	static new(): AGSWFSLayerInfo; // inherited from NSObject

	readonly extent: AGSEnvelope;

	readonly keywords: NSArray<string>;

	readonly layerDescription: string;

	readonly name: string;

	readonly spatialReferences: NSArray<AGSSpatialReference>;

	readonly title: string;
}

declare class AGSWFSService extends AGSLoadableRemoteResourceBase {

	static WFSServiceWithURL(URL: NSURL): AGSWFSService;

	static alloc(): AGSWFSService; // inherited from NSObject

	static new(): AGSWFSService; // inherited from NSObject

	customParameters: NSDictionary<string, string>;

	readonly serviceInfo: AGSWFSServiceInfo;

	constructor(o: { URL: NSURL; });

	initWithURL(URL: NSURL): this;
}

declare class AGSWFSServiceInfo extends AGSObject {

	static alloc(): AGSWFSServiceInfo; // inherited from NSObject

	static new(): AGSWFSServiceInfo; // inherited from NSObject

	readonly keywords: NSArray<string>;

	readonly layerInfos: NSArray<AGSWFSLayerInfo>;

	readonly serviceDescription: string;

	readonly title: string;
}

declare class AGSWMSFeature extends AGSObject implements AGSGeoElement {

	static alloc(): AGSWMSFeature; // inherited from NSObject

	static new(): AGSWMSFeature; // inherited from NSObject

	readonly attributes: NSMutableDictionary<string, any>; // inherited from AGSGeoElement

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	geometry: AGSGeometry; // inherited from AGSGeoElement

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSWMSLayer extends AGSImageAdjustmentLayer implements AGSRemoteResource, AGSTimeAware {

	static WMSLayerWithItem(item: AGSItem): AGSWMSLayer;

	static WMSLayerWithLayerInfos(layerInfos: NSArray<AGSWMSLayerInfo> | AGSWMSLayerInfo[]): AGSWMSLayer;

	static WMSLayerWithURLLayerNames(URL: NSURL, layerNames: NSArray<string> | string[]): AGSWMSLayer;

	static alloc(): AGSWMSLayer; // inherited from NSObject

	static new(): AGSWMSLayer; // inherited from NSObject

	customParameters: NSDictionary<string, string>;

	readonly layerInfos: NSMutableArray<AGSWMSLayerInfo>;

	readonly layerNames: NSMutableArray<string>;

	preferredImageFormat: AGSMapServiceImageFormat;

	refreshInterval: number;

	readonly sublayers: NSMutableArray<AGSWMSSublayer>;

	readonly version: AGSWMSVersion;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fullTimeExtent: AGSTimeExtent; // inherited from AGSTimeAware

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly supportsTimeFiltering: boolean; // inherited from AGSTimeAware

	timeFilteringEnabled: boolean; // inherited from AGSTimeAware

	readonly timeInterval: AGSTimeValue; // inherited from AGSTimeAware

	timeOffset: AGSTimeValue; // inherited from AGSTimeAware

	readonly  // inherited from NSObjectProtocol

	constructor(o: { item: AGSItem; });

	constructor(o: { layerInfos: NSArray<AGSWMSLayerInfo> | AGSWMSLayerInfo[]; });

	constructor(o: { URL: NSURL; layerNames: NSArray<string> | string[]; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithItem(item: AGSItem): this;

	initWithLayerInfos(layerInfos: NSArray<AGSWMSLayerInfo> | AGSWMSLayerInfo[]): this;

	initWithURLLayerNames(URL: NSURL, layerNames: NSArray<string> | string[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSWMSLayerInfo extends AGSObject {

	static alloc(): AGSWMSLayerInfo; // inherited from NSObject

	static new(): AGSWMSLayerInfo; // inherited from NSObject

	readonly extent: AGSEnvelope;

	readonly fixedImageHeight: number;

	readonly fixedImageWidth: number;

	readonly keywords: NSArray<string>;

	readonly layerDescription: string;

	readonly name: string;

	readonly opaque: boolean;

	readonly queryable: boolean;

	readonly spatialReferences: NSArray<AGSSpatialReference>;

	readonly styles: NSArray<string>;

	readonly sublayerInfos: NSMutableArray<AGSWMSLayerInfo>;

	readonly title: string;
}

declare class AGSWMSService extends AGSLoadableBase implements AGSRemoteResource {

	static WMSServiceWithURL(URL: NSURL): AGSWMSService;

	static alloc(): AGSWMSService; // inherited from NSObject

	static new(): AGSWMSService; // inherited from NSObject

	customParameters: NSDictionary<string, string>;

	readonly serviceInfo: AGSWMSServiceInfo;

	readonly version: AGSWMSVersion;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSWMSServiceInfo extends AGSObject {

	static alloc(): AGSWMSServiceInfo; // inherited from NSObject

	static new(): AGSWMSServiceInfo; // inherited from NSObject

	readonly imageFormats: NSArray<NSValue>;

	readonly keywords: NSArray<string>;

	readonly layerInfos: NSMutableArray<AGSWMSLayerInfo>;

	readonly name: string;

	readonly serviceDescription: string;

	readonly title: string;
}

declare class AGSWMSSublayer extends AGSObject implements AGSLayerContent {

	static alloc(): AGSWMSSublayer; // inherited from NSObject

	static new(): AGSWMSSublayer; // inherited from NSObject

	currentStyle: string;

	readonly sublayerInfo: AGSWMSLayerInfo;

	readonly canChangeVisibility: boolean; // inherited from AGSLayerContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly name: string; // inherited from AGSLayerContent

	showInLegend: boolean; // inherited from AGSLayerContent

	readonly subLayerContents: NSArray<AGSLayerContent>; // inherited from AGSLayerContent

	subLayerContentsChangedHandler: () => void; // inherited from AGSLayerContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	visible: boolean; // inherited from AGSLayerContent

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fetchLegendInfosWithCompletion(completion: (p1: NSArray<AGSLegendInfo>, p2: NSError) => void): AGSCancelable;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isVisibleAtScale(scale: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum AGSWMSVersion {

	V110 = 110,

	V111 = 111,

	V130 = 130
}

declare class AGSWMTSLayer extends AGSImageTiledLayer implements AGSRemoteResource {

	static WMTSLayerWithLayerInfo(layerInfo: AGSWMTSLayerInfo): AGSWMTSLayer;

	static WMTSLayerWithLayerInfoPreferredImageFormat(layerInfo: AGSWMTSLayerInfo, preferredImageFormat: AGSTileImageFormat): AGSWMTSLayer;

	static WMTSLayerWithLayerInfoTileMatrixSet(layerInfo: AGSWMTSLayerInfo, tileMatrixSet: AGSWMTSTileMatrixSet): AGSWMTSLayer;

	static WMTSLayerWithLayerInfoTileMatrixSetPreferredImageFormat(layerInfo: AGSWMTSLayerInfo, tileMatrixSet: AGSWMTSTileMatrixSet, preferredImageFormat: AGSTileImageFormat): AGSWMTSLayer;

	static WMTSLayerWithURLLayerID(URL: NSURL, layerID: string): AGSWMTSLayer;

	static WMTSLayerWithURLLayerIDMatrixSetID(URL: NSURL, layerID: string, matrixSetID: string): AGSWMTSLayer;

	static WMTSLayerWithURLLayerIDMatrixSetIDPreferredImageFormat(URL: NSURL, layerID: string, matrixSetID: string, preferredImageFormat: AGSTileImageFormat): AGSWMTSLayer;

	static WMTSLayerWithURLLayerIDPreferredImageFormat(URL: NSURL, layerID: string, preferredImageFormat: AGSTileImageFormat): AGSWMTSLayer;

	static alloc(): AGSWMTSLayer; // inherited from NSObject

	static imageTiledLayerWithTileInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSWMTSLayer; // inherited from AGSImageTiledLayer

	static new(): AGSWMTSLayer; // inherited from NSObject

	customParameters: NSDictionary<string, string>;

	readonly layerInfo: AGSWMTSLayerInfo;

	readonly preferredImageFormat: AGSTileImageFormat;

	readonly tileMatrixSet: AGSWMTSTileMatrixSet;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { layerInfo: AGSWMTSLayerInfo; });

	constructor(o: { layerInfo: AGSWMTSLayerInfo; preferredImageFormat: AGSTileImageFormat; });

	constructor(o: { layerInfo: AGSWMTSLayerInfo; tileMatrixSet: AGSWMTSTileMatrixSet; });

	constructor(o: { layerInfo: AGSWMTSLayerInfo; tileMatrixSet: AGSWMTSTileMatrixSet; preferredImageFormat: AGSTileImageFormat; });

	constructor(o: { URL: NSURL; layerID: string; });

	constructor(o: { URL: NSURL; layerID: string; matrixSetID: string; });

	constructor(o: { URL: NSURL; layerID: string; matrixSetID: string; preferredImageFormat: AGSTileImageFormat; });

	constructor(o: { URL: NSURL; layerID: string; preferredImageFormat: AGSTileImageFormat; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithLayerInfo(layerInfo: AGSWMTSLayerInfo): this;

	initWithLayerInfoPreferredImageFormat(layerInfo: AGSWMTSLayerInfo, preferredImageFormat: AGSTileImageFormat): this;

	initWithLayerInfoTileMatrixSet(layerInfo: AGSWMTSLayerInfo, tileMatrixSet: AGSWMTSTileMatrixSet): this;

	initWithLayerInfoTileMatrixSetPreferredImageFormat(layerInfo: AGSWMTSLayerInfo, tileMatrixSet: AGSWMTSTileMatrixSet, preferredImageFormat: AGSTileImageFormat): this;

	initWithURLLayerID(URL: NSURL, layerID: string): this;

	initWithURLLayerIDMatrixSetID(URL: NSURL, layerID: string, matrixSetID: string): this;

	initWithURLLayerIDMatrixSetIDPreferredImageFormat(URL: NSURL, layerID: string, matrixSetID: string, preferredImageFormat: AGSTileImageFormat): this;

	initWithURLLayerIDPreferredImageFormat(URL: NSURL, layerID: string, preferredImageFormat: AGSTileImageFormat): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSWMTSLayerInfo extends AGSObject {

	static alloc(): AGSWMTSLayerInfo; // inherited from NSObject

	static new(): AGSWMTSLayerInfo; // inherited from NSObject

	readonly imageFormats: NSArray<NSValue>;

	readonly keywords: NSArray<string>;

	readonly layerDescription: string;

	readonly layerID: string;

	readonly styles: NSArray<string>;

	readonly tileMatrixSets: NSArray<AGSWMTSTileMatrixSet>;

	readonly title: string;
}

declare class AGSWMTSService extends AGSLoadableBase implements AGSRemoteResource {

	static alloc(): AGSWMTSService; // inherited from NSObject

	static new(): AGSWMTSService; // inherited from NSObject

	customParameters: NSDictionary<string, string>;

	readonly serviceInfo: AGSWMTSServiceInfo;

	readonly URL: NSURL; // inherited from AGSRemoteResource

	credential: AGSCredential; // inherited from AGSRemoteResource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	requestConfiguration: AGSRequestConfiguration; // inherited from AGSRemoteResource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AGSWMTSServiceInfo extends AGSObject {

	static alloc(): AGSWMTSServiceInfo; // inherited from NSObject

	static new(): AGSWMTSServiceInfo; // inherited from NSObject

	readonly keywords: NSArray<string>;

	readonly layerInfos: NSArray<AGSWMTSLayerInfo>;

	readonly serviceDescription: string;

	readonly tileMatrixSets: NSArray<AGSWMTSTileMatrixSet>;

	readonly title: string;

	readonly version: string;
}

declare class AGSWMTSTileMatrix extends AGSObject {

	static alloc(): AGSWMTSTileMatrix; // inherited from NSObject

	static new(): AGSWMTSTileMatrix; // inherited from NSObject

	readonly matrixID: string;

	readonly scaleDenominator: number;
}

declare class AGSWMTSTileMatrixSet extends AGSObject {

	static alloc(): AGSWMTSTileMatrixSet; // inherited from NSObject

	static new(): AGSWMTSTileMatrixSet; // inherited from NSObject

	readonly extent: AGSEnvelope;

	readonly keywords: NSArray<string>;

	readonly spatialReference: AGSSpatialReference;

	readonly tileMatrices: NSArray<AGSWMTSTileMatrix>;

	readonly tileMatrixSetDescription: string;

	readonly tileMatrixSetID: string;

	readonly title: string;

	readonly wellKnownScaleSetID: string;
}

declare class AGSWebTiledLayer extends AGSServiceImageTiledLayer {

	static alloc(): AGSWebTiledLayer; // inherited from NSObject

	static imageTiledLayerWithTileInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSWebTiledLayer; // inherited from AGSImageTiledLayer

	static new(): AGSWebTiledLayer; // inherited from NSObject

	static serviceImageTiledLayerWithTiledInfoFullExtent(tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSWebTiledLayer; // inherited from AGSServiceImageTiledLayer

	static webTiledLayerWithURLTemplate(URLTemplate: string): AGSWebTiledLayer;

	static webTiledLayerWithURLTemplateSubDomains(URLTemplate: string, subDomains: NSArray<string> | string[]): AGSWebTiledLayer;

	static webTiledLayerWithURLTemplateSubDomainsTileInfoFullExtent(URLTemplate: string, subDomains: NSArray<string> | string[], tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSWebTiledLayer;

	static webTiledLayerWithURLTemplateTileInfoFullExtent(URLTemplate: string, tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): AGSWebTiledLayer;

	readonly URLTemplate: string;

	readonly subDomains: NSArray<string>;

	constructor(o: { URLTemplate: string; });

	constructor(o: { URLTemplate: string; subDomains: NSArray<string> | string[]; });

	constructor(o: { URLTemplate: string; subDomains: NSArray<string> | string[]; tileInfo: AGSTileInfo; fullExtent: AGSEnvelope; });

	constructor(o: { URLTemplate: string; tileInfo: AGSTileInfo; fullExtent: AGSEnvelope; });

	initWithURLTemplate(URLTemplate: string): this;

	initWithURLTemplateSubDomains(URLTemplate: string, subDomains: NSArray<string> | string[]): this;

	initWithURLTemplateSubDomainsTileInfoFullExtent(URLTemplate: string, subDomains: NSArray<string> | string[], tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): this;

	initWithURLTemplateTileInfoFullExtent(URLTemplate: string, tileInfo: AGSTileInfo, fullExtent: AGSEnvelope): this;
}

declare const enum AGSWrapAroundMode {

	EnabledWhenSupported = 0,

	Disabled = 1
}

declare var ArcGISVersionNumber: number;

declare var ArcGISVersionString: interop.Reference<number>;
