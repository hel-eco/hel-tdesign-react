import tDesignReact, { MyComp } from 'components';

const toExport = { ...tDesignReact, MyComp };

export type LibProperties = typeof toExport;

export default toExport;
