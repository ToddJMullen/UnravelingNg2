export class SpecialDivesEnum{
	static readonly NIGHT_DIVE		= "Night Dive";
	static readonly CAVE_DIVE		= "Cave Dive";
	static readonly DEEP_DIVE		= "Deep Dive";
	static readonly SAMMICH_DIVE	= "Sammich Dive!";

	static toArray():string[]{
		return [
			SpecialDivesEnum.NIGHT_DIVE
			,SpecialDivesEnum.DEEP_DIVE
			,SpecialDivesEnum.CAVE_DIVE
			,SpecialDivesEnum.SAMMICH_DIVE
		];
	}

}//SpecialDivesEnum
