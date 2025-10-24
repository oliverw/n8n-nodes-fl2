import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon
} from 'n8n-workflow';

export class Fl2Api implements ICredentialType {
	name = 'fl2Api';
	displayName = 'F2 API';
	icon = 'file:logo.svg' as Icon;
	documentationUrl = 'https://github.com/oliverw/n8n-nodes-fl2?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.fl2.io/api/v1',
			url: '/links',
		},
	};
}
