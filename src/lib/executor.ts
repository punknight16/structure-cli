import * as Shared from '../../structure-shared/src/'

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