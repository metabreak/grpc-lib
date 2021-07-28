const releaseCommitMessage =
  'chore(release): ${nextRelease.gitTag}\n\n${nextRelease.notes}\n\n[skip ci]';

module.exports = {
  branches: ['main', 'next', { name: 'dev', prerelease: true }],
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
    [
      '@semantic-release/exec',
      {
        prepare: 'yarn && yarn format',
      },
    ],
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
