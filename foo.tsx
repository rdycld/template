// import {
//   createContext,
//   ReactNode,
//   RefObject,
//   useContext,
//   useEffect,
//   useRef,
//   useSyncExternalStore,
// } from "react";
// import { throwIfNull, throwIfUndefined } from "./throw-if";

// export const createStore = <Store,>() => {
//   type SharedRefType = {
//     current: Store;
//     listeners: Set<() => void>;
//   };

//   const SharedRefContext = createContext<RefObject<SharedRefType> | null>(null);

//   const Provider = ({
//     value,
//     children,
//   }: {
//     value: Store;
//     children: ReactNode;
//   }) => {
//     const sharedRef = useRef<SharedRefType>({
//       current: value,
//       listeners: new Set(),
//     });

//     sharedRef.current.current = value;
//     useEffect(() => {
//       for (const listener of sharedRef.current.listeners) {
//         listener();
//       }
//     }, [value]);

//     return <SharedRefContext value={sharedRef}>{children}</SharedRefContext>;
//   };

//   const useStore = <T,>(
//     selector: (store: Store) => T,
//     valuesAreEqual: (a: T, b: T) => boolean = Object.is,
//   ) => {
//     const sharedRef = throwIfNull(useContext(SharedRefContext), "fix me");
//     const currentValueRef = useRef<undefined | { value: T }>(undefined);
//     currentValueRef.current ??= { value: selector(sharedRef.current.current) };

//     return useSyncExternalStore(
//       (onStoreChange) => {
//         const handler = () => {
//           const nextValue = selector(sharedRef.current.current);

//           if (
//             !currentValueRef.current ||
//             !valuesAreEqual(currentValueRef.current.value, nextValue)
//           ) {
//             currentValueRef.current = { value: nextValue };
//             onStoreChange();
//           }
//         };

//         sharedRef.current.listeners.add(handler);
//         return () => {
//           sharedRef.current.listeners.delete(handler);
//         };
//       },
//       () => throwIfUndefined(currentValueRef.current, "fix me").value,
//       () => throwIfUndefined(currentValueRef.current, "fix me").value,
//     );
//   };

//   return { Provider, useStore };
// };
