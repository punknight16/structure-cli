import * as Shared from 'placeholder-shared';
import * as YAML from 'yaml';

export const runJob = (userData:any) => {
	return new Promise((resolve, reject) => {
		let store = Shared.State.CreateStore(userData)
		const getStateWrapper = () => {
			return store.getState()
		}
		const dispatchWrapper = (action) => {
			return store.dispatch(action)
		}
		const onRunResult = () => {
			//unused

		}
		const thunkFunc = Shared.Runner.PlayTaskThunk(1, onRunResult, null)
		let p = thunkFunc(dispatchWrapper, getStateWrapper)
		const getJobState = () => {
			const state = store.getState()
			const better_state = Shared.Data.cleanUserState(state)
			return {runResults:better_state.runResults, steps:(better_state as any).steps, treeData:(better_state as any).treeData}
		}
		p.then(()=>{
			//console.log("results", results)
			resolve(getJobState());
		})
		.catch((err) => {
			console.error("error", err)
			reject(getJobState())
		})
	})
}

export const transformYmlDataToUserStateData = (ymlData) =>{
  const steps = {}
  const treeNodes: any = [];
  const content = YAML.parse(ymlData);
  let i = 1;
  for(let key in content){
      //steps[content[key].stepCounter] = content[key];
      steps[i] = content[key];
      steps[i].name = key;
      steps[i].operation.name = key;
      treeNodes.push({
          stepCounter: i, 
          //stepCounter: content[key].stepCounter,
          x: 0,
          y: 0
      })
      i++;
  }
  const intermediateTreeData = {nodes: treeNodes};
  const treeData = {1: Shared.TreeData.getTreeDataFromJson(intermediateTreeData)}
  let runResults = {};
  let tableRefs = {};  
  for(const key in steps){
      runResults[key] = {};
      const iconfig = Shared.Runner.getConfigFromSQLString(steps[key].operation.sql)
      tableRefs[key] = iconfig.tableRefs
      //TODO: how to handle failure?
  }
  return {steps, treeData, runResults, tableRefs};       
}