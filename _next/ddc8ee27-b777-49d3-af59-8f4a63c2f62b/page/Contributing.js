module.exports=__NEXT_REGISTER_PAGE("/Contributing",function(){return{page:webpackJsonp([31],{535:function(e,n,a){e.exports=a(536)},536:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),o=a.n(t),m=a(3);a.n(m);n.default=function(e){var n=e.components;!function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"contributing"}},"Contributing"),o.a.createElement(m.MDXTag,{name:"p",components:n},"If you'd like to contribute to the design system, we'd love to have your help.\nAs with any open source project, we ask that you be nice, professional, and courteous towards others."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Contributing doesn't necessarily mean commiting code, we also encourage you to:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Open issues"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Join in on discussions in issues and PRs"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Help write documentation"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Use the Design System in your project and provide feedback")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"local-development"}},"Local Development"),o.a.createElement(m.MDXTag,{name:"p",components:n},"To contribute code to the Design System, first you'll need to set it up for local development."),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"clone-the-repo"}},"Clone the repo:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"git clone https://github.com/pricelinelabs/design-system.git\ncd design-system\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"install-dependencies"}},"Install dependencies:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"npm install\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"running-tests"}},"Running tests"),o.a.createElement(m.MDXTag,{name:"p",components:n},"We use ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://facebook.github.io/jest/"}},"Jest")," for testing, including unit tests for functionality and ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://facebook.github.io/jest/docs/en/snapshot-testing.html#content"}},"snapshot testing")," for components."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"npm test\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"To run tests in watch mode (useful for TDD):"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"npm test -- --watch\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"If you make intentional changes to an existing component, you will need to update its snapshot:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"npm test -- -u\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"storybook"}},"Storybook"),o.a.createElement(m.MDXTag,{name:"p",components:n},"We use ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://storybook.js.org"}},"Storybook")," for isolated UI component development."),o.a.createElement(m.MDXTag,{name:"p",components:n},"To run storybook locally:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"npm start\nopen http://localhost:8000/\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"static-docs-site"}},"Static Docs Site"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Markdown and source code for the ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://pricelinelabs.github.io/design-system/"}},"static docs site")," are located in\n",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docs/"),". This ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.npmjs.com/package/@compositor/x0"}},"x0")," project requires Node 8+."),o.a.createElement(m.MDXTag,{name:"p",components:n},"To run the static docs locally:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"cd docs\nnpm install\nnpm start\n")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"troubleshooting"}},"Troubleshooting"),o.a.createElement(m.MDXTag,{name:"p",components:n},"You may run into the following error ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ERROR in ./icons.json")," when running storybook. The problem occur when the icons.json is not built yet. Running ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run prepare")," should fix the problem."),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"github-flow"}},"GitHub Flow"),o.a.createElement(m.MDXTag,{name:"p",components:n},"We follow a loose version of ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://guides.github.com/introduction/flow/"}},"GitHub Flow")," where feature branches are created\nfrom master, submitted as pull requests, given time for review and discussion,\nthen merged into master.\nAll merges into master should be ready to be published to npm\nand the person merging the PR should use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm version")," to bump the package's\nversion according to ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://semver.org"}},"Semantic Versioning"),"."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Generally the workflow looks like this:"),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Pull the latest changes from master"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Create a new feature branch (pick a name that clearly describes the feature)"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Commit changes to your feature branch (smaller commits with clear messages are best)"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Push your branch to origin"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Open a Pull Request with a clear description of the change (Answering ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"li"},"what"),", ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"li"},"why"),", and ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"li"},"how")," is a good place to start)"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Allow for some time for discussion"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"(optional) If your PR has merge conflicts, pull the latest from master, then merge those changes into your PR branch, resolving conflicts in the process"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Once there is a general consensus on the change and all tests have passed, merge the PR into master"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Use the npm CLI to appropriately version and publish the package"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Push the git tags created with the npm CLI to GitHub with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"git push --tags"))),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"beta-version"}},"Beta Version"),o.a.createElement(m.MDXTag,{name:"p",components:n},"As of the date this was written, the Design System is currently in a beta.\nThe package versioning reflects this with the version ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1.0.0-x")," convention.\nOnce the library is in a more stable and mature state, we will release a stable ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1.0.0"),"\nand strictly follow semantic versioning from that point on."),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"pull-requests"}},"Pull Requests"),o.a.createElement(m.MDXTag,{name:"p",components:n},"All changes to the code base should be reviewed in a PR before merging to master.\nThis gives contributors and the team a chance to review and discuss changes and helps create a record of the project's history."),o.a.createElement(m.MDXTag,{name:"p",components:n},"If you're unsure about your change, feel free to open a PR for discussion or make an RFC (request for comments) PR.\nPRs can also be in a work in progress (WIP) state as long as they are clearly marked."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Generally follow these rules for creating a PR:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Keep it simple"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Keep changes as small as possible"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Write tests for changes & try to maintain 100% code coverage"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Write documentation for changes"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"For new components, add stories to Storybook"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Announce your PR to the appropriate channels in Slack"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Allow for enough time for everyone to review and discuss your PR"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Remember that not every PR will be merged, but that's okay")))}}},[535]).default}});