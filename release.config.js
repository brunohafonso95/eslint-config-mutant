const assets = [{ path: "src/index.js", label: "eslint config mutant" }];

const verifyConditions = [
  ["@semantic-release/changelog"],
  [
    "@semantic-release/git",
    {
      assets: ["package.json", "CHANGELOG.md"],
      message: "chore(release): ${nextRelease.version} [skip ci]",
    },
  ],
  [
    "@semantic-release/github",
    {
      assets,
    },
  ],
];

const analyzeCommits = [
  [
    "@semantic-release/commit-analyzer",
    {
      preset: "eslint",
      releaseRules: [
        { breaking: true, release: "major" },
        { revert: true, release: "patch" },
        { type: "feat", release: "minor" },
        { type: "fix", release: "patch" },
        { type: "refactor", release: "patch" },
        { type: "style", release: "patch" },
      ],
      parserOpts: {
        noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
      },
    },
  ],
];

const generateNotes = [
  "@semantic-release/release-notes-generator",
  {
    preset: "eslint",
    parserOpts: {
      noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
    },
    writerOpts: {
      commitsSort: ["subject", "scope"],
    },
  },
];

const prepare = [
  "@semantic-release/changelog",
  [
    "@semantic-release/npm",
    {
      npmPublish: true,
    },
  ],
  [
    "@semantic-release/git",
    {
      assets: ["package.json", "CHANGELOG.md"],
      message: "chore(release): ${nextRelease.version} [skip ci]",
    },
  ],
];

const publish = [
  [
    "@semantic-release/github",
    {
      assets,
    },
  ],
  [
    "@semantic-release/npm",
    {
      npmPublish: true,
    },
  ],
];

const verifyRelease = [];
const fail = [];
const success = [];
const addChannel = [];

module.exports = {
  repositoryUrl: "https://github.com/brunohafonso95/eslint-config-mutant.git",
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "master",
    "develop",
    "(RC)+([0-9])?({+([0-9])})",
    "(sprint)+([0-9])?({+([0-9])})",
  ],
  verifyConditions,
  analyzeCommits,
  verifyRelease,
  generateNotes,
  prepare,
  publish,
  fail,
  success,
  addChannel,
};
