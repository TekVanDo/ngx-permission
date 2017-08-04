// import { TransitionService } from '@uirouter/angular';
// // import { AuthService } from './';
//
// export function routerAuthHook(transitionService: TransitionService) {
//
//   const requiresAuthCriteria = {
//     // to: (state) => state.declarel02 && state.declarel02.requiresAuth
//   };
//
//   const redirectToLogin = (transition) => {
//     // const authService: AuthService = transition.injector().get(AuthService);
//     const $state = transition.router.stateService;
//     return authService.getUser().then((user) => {
//       if (!user) {
//         let toState = transition.to().data.redirectTo || 'login';
//         return $state.target(toState, undefined, { location: false });
//       }
//     });
//   };
//   transitionService.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
// }
