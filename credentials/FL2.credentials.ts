import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class FL2Api implements ICredentialType {
	name = 'FL2Api';
	displayName = 'FL2 API';
	icons = { light: "file:fl2.svg", dark: "file:fl2.svg" };
	documentationUrl = 'https://github.com/FL2Org/n8n-nodes-fl2?tab=readme-ov-file#credentials';

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
			baseURL: 'https://app.fl2.net/api/v1',
			url: '/links',
		},
	};
}
