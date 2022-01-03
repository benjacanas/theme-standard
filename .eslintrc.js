module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'linebreak-style': [
      'error',
      `${process.env.OS === 'Windows_NT' ? 'windows' : 'unix'}`
    ],
    semi: ['error', 'never'],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }]
  }
}

/*
  CONFIGS IN SETTINGS.JSON IN VS CODE

	"eslint.alwaysShowStatus": true,
	"files.autoSave": "onFocusChange",
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"editor.formatOnSave": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true,
		"source.organizeImports": false
	}
  */
