const releaseCommitMessage =
  'chore(release): ${nextRelease.gitTag}\n\n${nextRelease.notes}\n\n[skip ci]';

module.exports = {
  branches: ['main', 'dev'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        presetConfig: {},
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {},
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'yarn.lock'],
        message: releaseCommitMessage,
      },
    ],
    '@semantic-release/github',
  ],
};
