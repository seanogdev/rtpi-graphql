import fetchData from '../rtpi/api';
import normalizeStrings from '../utils/normalizeStrings';

export default {
  Query: {
    operator: async (_, args) => {
      try {
        if (!args.id && !args.name) throw new Error('Specify id or email')

        const data = await fetchData('operatorinformation');
        let operator;
        if (args.id) {
          operator = data.find(operator => operator.operatorreference === args.id);
        }
        if (args.name) {
          operator = data.find(
            operator => normalizeStrings(operator.operatorname) === args.name
          );
        }
        if (operator) {
          return {
            id: operator.operatorreference,
            name: operator.operatorname,
            description: operator.operatordescription,
          }
        }
        return null;
      } catch (e) {
        return Promise.reject(e);
      }
    },

    operators: async () => {
      const data = await fetchData('operatorinformation');
      return data.map(operator => ({
        id: operator.operatorreference,
        name: operator.operatorname,
        description: operator.operatordescription,
      }))
    }

  }
};