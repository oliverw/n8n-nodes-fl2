import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { linkDescription } from './resources/link';
import { channelDescription } from './resources/channel';

export class Fl2 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'FL2',
		name: 'fl2',
		icon: "file:logo.svg",
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the FL2 API',
		defaults: {
			name: 'Fl2',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'fl2Api', required: true }],
		requestDefaults: {
			baseURL: 'https://app.fl2.io/api/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Link',
						value: 'link',
					},
					{
						name: 'Channel',
						value: 'channel',
					},
				],
				default: 'link',
			},
			...linkDescription,
			...channelDescription,
		],
		usableAsTool: true,
	};
}
