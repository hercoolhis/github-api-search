/* eslint-disable import/no-unresolved */
module.exports = {
  env: {
    browser: true,
    es6: true,
    meteor: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  extends: [
    "standard",
    "standard-jsx",
    "standard-react",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: [
        '@babel/preset-react'
      ]
    }
  },
  plugins: [
    "react",
    "emotion",
    "react-hooks",
  ],
  rules: {
    curly: "error",
    "comma-dangle": "off",
    "consistent-return": "off",
    "default-case": "off",
    "import/no-unresolved": [
      "error",
      {
        ignore: [
          "^meteor/",
          "^/",
          "simpl-schema"
        ],
      },
    ],
    "max-len": [
      "warn",
      {
        code: 120,
        ignoreStrings: true
      }
      // {
      // "ignorePattern": "^import\\s.+\\sfrom\\s.+\|^\\s+\{__[\(].+[\)\}]$"
      // },
    ],
    "keyword-spacing": [
      "error",
      {before: true, after: true},
    ],
    "linebreak-style": [
      "error",
      "unix",
    ],
    "no-console": "warn",
    "no-nested-ternary": [
      "off"
    ],
    "no-param-reassign": [
      "warn",
      {
        ignorePropertyModificationsFor: [
          "params"
        ]
      }
    ],
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true
      }
    ],
    "prefer-const": [
      "warn"
    ],
    "object-curly-newline": [
      "warn",
      {
        ObjectPattern: {
          minProperties: 6
        }
      }
    ],
    "react/destructuring-assignment": [
      "warn",
      "always"
    ],
    "object-curly-spacing": [
      "warn"
    ],
    "one-var-declaration-per-line": [
      "off"
    ],
    "operator-linebreak": [
      "warn",
      "after"
    ],
    quotes: [
      "off",
      "single",
    ],
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-props-no-spreading": "off",
    'react/jsx-tag-spacing': [
      "off"
    ],
    "react/prop-types": "off",
    "react/sort-comp": "warn",
    semi: [
      "off",
      "never",
    ],
    "space-before-function-paren": [
      "off",
    ],
    "jsx-quotes": ["error", "prefer-double"],
  },
  globals: {
    $: true,
    Accounts: true,
    App: true,
    AssignmentRules: true,
    Belco: true,
    Billing: true,
    Blaze: true,
    BlazeLayout: true,
    Calls: true,
    Companies: true,
    Contacts: true,
    ConversationItems: true,
    Conversations: true,
    Counts: true,
    Customers: true,
    Email: true,
    EmailTemplates: true,
    EmailUtils: true,
    FlowRouter: true,
    GlobalSearch: true,
    Integrations: true,
    Lightspeed: true,
    Match: true,
    Mailgun: true,
    Meteor: true,
    NProgress: true,
    Notes: true,
    Notifications: true,
    Npm: true,
    OpeningHours: true,
    Orders: true,
    Organizations: true,
    Package: true,
    PhoneNumbers: true,
    Picker: true,
    ProfilePanels: true,
    Random: true,
    ReactiveTimer: true,
    ReactiveVar: true,
    Roles: true,
    Schemas: true,
    Session: true,
    Shops: true,
    SimpleSchema: true,
    Tags: true,
    Teams: true,
    Template: true,
    Tracker: true,
    Voicemails: true,
    WebhookListeners: true,
    Webhooks: true,
    Widget: true,
    Woocommerce: true,
    Workers: true,
    _: true,
    __: true,
    check: true,
    moment: true,
    twilio: true,
    ValidatedMethod: true,
    Insights: true,
    it: true,
    MockConversationItems: true,
  }
};

