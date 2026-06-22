import { Skill } from "../types";

export function readModifierRange(
  prop: string,
  param: string,
  min: string,
  max: string,
  skills: Skill[]
) {
  if (!prop || prop.startsWith("*")) {
    return;
  }

  const paramTrimmed = param.trim();
  let paramVal: number | undefined;
  if (paramTrimmed !== "") {
    paramVal = Number(paramTrimmed);
    if (Number.isNaN(paramVal)) {
      paramVal = skills.findIndex(
        ({ code }) =>
          code.toLocaleLowerCase() === paramTrimmed.toLocaleLowerCase()
      );
    }
  }

  return {
    prop: prop.trim().toLocaleLowerCase(),
    ...(paramVal !== undefined && { param: paramVal }),
    min: Number(min),
    max: Number(max),
  };
}
