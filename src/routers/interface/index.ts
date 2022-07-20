export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface AnyProps {
	[propName: string]: any;
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
	meta?: MetaProps;
	linkUrl?: string;
	isBlank?: boolean;
}
