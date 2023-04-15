type TypeParam = {
  key: string;
  value: string
}

function listToObjKeyVal(list: TypeParam[]) {
  return list.reduce((prev: TypeParam, act: TypeParam) => ({[act.key]: act.value, ...prev}), {} as TypeParam)
}

export {
  TypeParam,
  listToObjKeyVal
}