import * as alt from 'alt-client';
import { getClosestPlayer, getClosestVehicle } from './src/utility/closest.js';
import { addAPI } from '@AthenaClient/systems/plugins.js';
import { loadModel } from './src/utility/model.js';
import { InventoryUtil } from './src/utility/inventory.js';

declare global {
    export interface ClientPluginAPI {
        ['gputils']: typeof funcs;
    }
}

const InventoryUtilInstance = new InventoryUtil();
InventoryUtilInstance.init();

const funcs = {
    getClosestVehicle,
    getClosestPlayer,
    loadModel,
    getInventory: InventoryUtilInstance.getInventory,
    getToolbar: InventoryUtilInstance.getToolbar,
    getTotalWeight: InventoryUtilInstance.getTotalWeight,
};

addAPI('gputils', funcs);

alt.log(`~ly~Plugin Loaded -- gpAthenaUtils`);
