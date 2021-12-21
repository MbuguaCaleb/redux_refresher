**What does Redux do**

```
Redux helps in centralizing/globalizing my State.

It helps me avoid property drilling in my Components.


(It becomes very cumbersome when i a passing state progrssively through props)

```

**Redux Data Flow**

```
Reducer

Action

Action Creator

Action Type

Action Payload

Dispatch

Store.


(a)Action Creator....

It is a function that triggers the  action.

It may  be a button when clicked.

(b)Action -->what we want to achieve.

Has two components--->Action Type and Action Payload.

Type--It is what the reducer reads and Interprets.

It is how we are ultimately going to affect our State.

Payload-Optionally added.

The reducer may use the Payload that we pass together with our
action to Manipulate our State depending on the  Logic that we have.


The action creator creates an action and dispatches it to the reducer.


Reducer.

It is able to read the action and Interpret it.


Based on the action type it updates our State.


```

**Packages to be Installed**

```
(a)Redux

(b)React Redux.

Redux by itself is completely independent of react.

React Redux helps in using Redux in a react project.

```

**To Provide the Global State**

```
I must wrap all my components into what  i call a providor.

Every single component in my provider is going to have
access to the State.

We Wrap the app component , that our Mother Component with the Store that
we created.

My providor that i wrap with is linked to a particular store.


```

**How do we access the Data in the Store**

```
We usr the UseSelector Hook from React redux

```

**Notes By**

```
Mbugua Caleb

```
