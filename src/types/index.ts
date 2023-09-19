import { JsonFragment } from '@ethersproject/abi';

import { Network, SupportedNetwork } from '@openzeppelin/defender-sdk-base-client';
import { Contract } from '@openzeppelin/defender-sdk-proposal-client/lib/models/contract';
import { RelayerGetResponse, RelayerApiKey } from '@openzeppelin/defender-sdk-relay-client/lib/models';
import { DefenderApiResponseError } from '@openzeppelin/defender-sdk-base-client/lib/api/api-error';

import {
  SaveNotificationRequest,
  NotificationSummary,
  DatadogConfig,
  SlackConfig,
  TelegramBotConfig,
  EmailConfig,
  DiscordConfig,
  NotificationType,
} from '@openzeppelin/defender-sdk-monitor-client/lib/models/notification';

import { NotificationCategory } from '@openzeppelin/defender-sdk-monitor-client/lib/models/category';
import { CreateMonitorResponse, BlockWatcher } from '@openzeppelin/defender-sdk-monitor-client';
import { ForkedNetworkResponse } from '@openzeppelin/defender-sdk-network-client';

import {
  CreateBlockMonitorResponse,
  CreateFortaMonitorResponse,
  ExternalCreateBlockMonitorRequest,
  ExternalCreateFortaMonitorRequest,
  NotificationReference,
  MonitorRiskCategory,
} from '@openzeppelin/defender-sdk-monitor-client/lib/models/monitor';
import {
  Action,
  SecretsMap,
  ScheduleTrigger,
  WebhookTrigger,
  SentinelTrigger,
  MonitorFilterTrigger,
} from '@openzeppelin/defender-sdk-action-client/lib/models/action';
import { BlockExplorerApiKeyResponse } from '@openzeppelin/defender-sdk-deploy-client';
import { OpsgenieConfig } from '@openzeppelin/defender-sdk-monitor-client/lib/models/opsgenie';
import { PagerDutyConfig } from '@openzeppelin/defender-sdk-monitor-client/lib/models/pager-duty';

export type DefenderAPIError = DefenderApiResponseError;
export type DefenderRelayerApiKey = RelayerApiKey;
export type DefenderSecretsMap = SecretsMap;
export type DefenderContract = Contract;
export type DefenderRelayer = RelayerGetResponse;
export type DefenderAction = Action;
export type DefenderBlockWatcher = BlockWatcher;
export type DefenderNotification = NotificationSummary;
export type DefenderCategory = NotificationCategory;
export type DefenderNotificationReference = NotificationReference;
export type DefenderMonitor = CreateMonitorResponse;
export type DefenderBlockMonitorResponse = CreateBlockMonitorResponse;
export type DefenderFortaMonitorResponse = CreateFortaMonitorResponse;
export type DefenderBlockMonitor = ExternalCreateBlockMonitorRequest;
export type DefenderFortaMonitor = ExternalCreateFortaMonitorRequest;
export type DefenderSlackConfig = SlackConfig;
export type DefenderDatadogConfig = DatadogConfig;
export type DefenderDiscordConfig = DiscordConfig;
export type DefenderTelegramConfig = TelegramBotConfig;
export type DefenderEmailConfig = EmailConfig;
export type DefenderNetwork = Network;
export type DefenderBlockExplorerApiKey = BlockExplorerApiKeyResponse;
export type DefenderWebhookTrigger = WebhookTrigger;
export type DefenderScheduleTrigger = ScheduleTrigger;
export type DefenderMonitorTrigger = SentinelTrigger;
export type DefenderMonitorFilterTrigger = MonitorFilterTrigger;
export type DefenderMonitorRiskCategory = MonitorRiskCategory;
export type DefenderForkedNetwork = ForkedNetworkResponse;

// Generated Interfaces from Schemas
import * as SchemaDefender from '../types/types/defender.schema';
import * as SchemaResources from '../types/types/resources.schema';
import * as SchemaProvider from '../types/types/provider.schema';

export type Resources = SchemaResources.Resources;
export type Provider = SchemaProvider.Provider;
export type Defender = SchemaDefender.Defender;
export interface IDefenderServerless {
  provider: { name: 'defender' } & Provider;
  defender: Defender;
  resources: Resources;
}

export type ResourceType =
  | 'Monitors'
  | 'Relayers'
  | 'Notifications'
  | 'Categories'
  | 'Actions'
  | 'Contracts'
  | 'Secrets'
  | 'Block Explorer Api Keys'
  | 'Forked Networks';

export type YPolicy = {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: string[];
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean;
};

export type YRelayer = {
  'name': string;
  'network': Network;
  'min-balance': number;
  'policy'?: YPolicy;
  'api-keys': any[];
  'address-from-relayer'?: YRelayer;
};

export type YAction = {
  name: string;
  path: string;
  relayer?: YRelayer;
  trigger: {
    type: 'schedule' | 'webhook' | 'sentinel' | 'monitor-filter';
    frequency?: number;
    cron?: string;
  };
  paused: boolean;
};

export type YSlackConfig = {
  url: string;
};

export type YTelegramConfig = {
  'bot-token': string;
  'chat-id': string;
};

export type YDiscordConfig = {
  url: string;
};

export type YEmailConfig = {
  emails: string[];
};

export type YDatadogConfig = {
  'api-key': string;
  'metric-prefix': string;
};

export type YOpsgenieConfig = OpsgenieConfig;
export type YPagerdutyConfig = PagerDutyConfig;

export type YNotification = SaveNotificationRequest & {
  type: NotificationType;
  name: string;
  paused: boolean;
  config:
    | YSlackConfig
    | YTelegramConfig
    | YDatadogConfig
    | YDiscordConfig
    | YEmailConfig
    | YOpsgenieConfig
    | YPagerdutyConfig;
};

export type YCategory = {
  'name': string;
  'description': string;
  'notification-ids': YNotification[];
};

export type YBlockMonitor = {
  'name': string;
  'type': 'BLOCK';
  'network': Network;
  'addresses': string[];
  'abi'?: string | string[] | JsonFragment[];
  'alert-threshold'?: { 'amount': number; 'window-seconds': number };
  'paused'?: boolean;
  'action-condition'?: YAction;
  'action-trigger'?: YAction;
  'confirm-level'?: number | 'safe' | 'finalized';
  'notify-config': {
    'timeout'?: number;
    'message'?: string;
    'message-subject'?: string;
    'category'?: YCategory;
    'channels': YNotification[];
  };
  'conditions'?: {
    event: { signature: string; expression?: string }[];
    function: { signature: string; expression?: string }[];
    transaction?: string;
  };
  'risk-category': DefenderMonitorRiskCategory;
};

export type YFortaMonitor = {
  'name': string;
  'type': 'FORTA';
  'network'?: Network;
  'addresses'?: string[];
  'abi'?: string | string[] | JsonFragment[];
  'alert-threshold'?: { 'amount': number; 'window-seconds': number };
  'paused'?: boolean;
  'action-condition'?: YAction;
  'action-trigger'?: YAction;
  'notify-config': {
    'timeout'?: number;
    'message'?: string;
    'message-subject'?: string;
    'category'?: YCategory;
    'channels': YNotification[];
  };
  'conditions'?: {
    'min-scanner-count': number;
    'severity'?: 0 | 1 | 2 | 3 | 4 | 5;
    'alert-ids'?: string[];
  };
  'forta-node-id'?: string;
  'agent-ids'?: string[];
  'forta-last-processed-time'?: string;
  'risk-category': DefenderMonitorRiskCategory;
};

export type YMonitor = YBlockMonitor | YFortaMonitor;

export type YContract = {
  'name': string;
  'address': string;
  'network': Network;
  'abi'?: string | string[] | JsonFragment[];
  'nat-spec'?: string;
};

export type YSecret = {
  [k: string]: string;
};

export type YForkedNetwork = {
  'name': string;
  'forked-network': SupportedNetwork;
  'rpc-url': string;
  'api-key': string;
  'block-explorer-url': string;
};

export type TeamKey = {
  apiKey: string;
  apiSecret: string;
};

export type DeployResponse = {
  name: string;
  id: string;
  success: boolean;
  notice?: string;
  error?: string;
  [k: string]: any;
};

export type DeployOutput<T> = { removed: T[]; created: T[]; updated: T[] };

export type ListDefenderResources = {
  monitors: DefenderMonitor[];
  actions: DefenderAction[];
  notifications: DefenderNotification[];
  categories: DefenderCategory[];
  contracts: DefenderContract[];
  relayerApiKeys: DefenderRelayerApiKey[];
  secrets: string[];
  blockExplorerApiKeys: DefenderBlockExplorerApiKey[];
  forkedNetworks: DefenderForkedNetwork[];
};

export type YBlockExplorerApiKey = {
  'key': string;
  'key-hash'?: string;
  'network': Network;
};
