var project = {
	sources : {
		'source1' : {
			type : 'googledocs',
			key  : '0Auz3ko8uUdphdE1sanBCc2pkU0syTlNDenltNzRRdXc',
			wid  : 'od6'
		},
	},
	tables : {
		'table1' : {
			source : 'source1',
			dimensions : {
				'label' : {
					type : 'string'
				},
				'value' : {
					type : 'float'
				}
			}
		}
	},
	patterns : {
		'viz1' : {
			type : 'visualligence/table'
		}
	}
};
