import {Crafter} from '@src/Data/Crafter';
import { Model } from '@src/Data/Model';
import { ICraftDetailSchema } from '@src/Schema/ICraftDetailSchema';

export class CraftDetail
{
	public logisticTime: number;
	private static logisticTimePerItem: number = 1;

	public constructor(private readonly model: Model, public readonly crafter: Crafter, public readonly prototype: ICraftDetailSchema)
	{
		const material = model.getMaterialByModuleId(prototype.moduleId);
		this.logisticTime = 2 * CraftDetail.logisticTimePerItem;
	}

	public getTotalCraftingTime(): number
	{
		return this.prototype.craftDuration + this.logisticTime;
	}
}
