import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { linkDescription } from './resources/link';
import { channelDescription } from './resources/channel';

export class FL2 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'FL2',
		name: 'fl2',
		icon: "file:fl2.svg",
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the FL2 API',
		defaults: {
			name: 'FL2',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'FL2Api', required: true }],
		requestDefaults: {
			baseURL: 'https://app.fl2.net/api/v1',
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
