

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */


export const buildAbilityFor = (role: any, moduleId: number) => {

  try {

    if (role?.super_admin) {
      return {
        ids: [],
        ability: [1, 2, 3, 4],
        moduleId: moduleId,
        can: (mId: number,) => {
          return mId == moduleId
        },
        read: true,
        write: true,
        update: true,
        del: true
      }
    }


    const ability = role.permissions?.[moduleId]

    if (ability) {
      return {
        ...ability,
        moduleId: moduleId,
        can: (mId: number,) => {
          return mId == moduleId
        },
        read: ability.ability.includes(1),
        write: ability.ability.includes(2),
        update: ability.ability.includes(3),
        del: ability.ability.includes(4)
      }
    }
    return undefined
  }
  catch (err) {
    console.log(err)
  }
}


