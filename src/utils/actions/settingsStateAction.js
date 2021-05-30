import { ACTION_TYPES } from "../Documents/enums";

export const toggleSettings = (toggleKey) => {
	return {
		type: toggleKey,
	};
};

export const changeDesktopBackground = (wallpaperId) => {
	return {
		type: ACTION_TYPES.CHANGE_WALLPAPER,
		wallpaperId: wallpaperId,
	};
};
