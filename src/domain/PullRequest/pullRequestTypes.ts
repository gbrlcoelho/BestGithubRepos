import {PageParams} from '@api';

export interface GetPullRequestListParams extends PageParams {
  owner: string;
  repo: string;
}

export interface PullRequestAPI {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: UserAPI;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at?: null;
  merged_at?: null;
  merge_commit_sha: string;
  assignee?: null;
  assignees?: any[] | null;
  requested_reviewers?: any[] | null;
  requested_teams?: RequestedTeamsAPI[] | null;
  labels?: LabelsAPI[] | null;
  milestone?: null;
  draft: boolean;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: HeadAPI;
  base: BaseAPI;
  _links: LinksAPI;
  author_association: string;
  auto_merge?: null;
  active_lock_reason?: null;
}
export interface UserAPI {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface RequestedTeamsAPI {
  name: string;
  id: number;
  node_id: string;
  slug: string;
  description: string;
  privacy: string;
  notification_setting: string;
  url: string;
  html_url: string;
  members_url: string;
  repositories_url: string;
  permission: string;
  parent?: null;
}
export interface LabelsAPI {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}
export interface HeadAPI {
  label: string;
  ref: string;
  sha: string;
  user: UserAPI;
  repo: RepoAPI;
}
export interface RepoAPI {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: OwnerAPI;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url?: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: LicenseAPI;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics?: string[] | null;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
export interface OwnerAPI {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface LicenseAPI {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}
export interface BaseAPI {
  label: string;
  ref: string;
  sha: string;
  user: UserAPI;
  repo: RepoAPI;
}
export interface SelfAPI {
  href: string;
}
export interface LinksAPI {
  self: SelfAPI;
  html: Html;
  issue: Issue;
  comments: Comments;
  review_comments: ReviewComments;
  review_comment: ReviewComment;
  commits: Commits;
  statuses: Statuses;
}
export interface Html {
  href: string;
}
export interface Issue {
  href: string;
}
export interface Comments {
  href: string;
}
export interface ReviewComments {
  href: string;
}
export interface ReviewComment {
  href: string;
}
export interface Commits {
  href: string;
}
export interface Statuses {
  href: string;
}

export interface PullRequest {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  title: string;
  date: string;
  body: string;
}
