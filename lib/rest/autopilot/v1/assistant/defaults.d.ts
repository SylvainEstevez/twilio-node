/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the DefaultsList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The SID of the Assistant that is the parent of the resource
 */
declare function DefaultsList(version: V1, assistantSid: string): DefaultsListInstance;

/**
 * Options to pass to update
 *
 * @property defaults - A JSON string that describes the default task links.
 */
interface DefaultsInstanceUpdateOptions {
  defaults?: string;
}

interface DefaultsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DefaultsContext;
  /**
   * Constructs a defaults
   */
  get(): DefaultsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface DefaultsPayload extends DefaultsResource, Page.TwilioResponsePayload {
}

interface DefaultsResource {
  account_sid: string;
  assistant_sid: string;
  data: string;
  url: string;
}

interface DefaultsSolution {
  assistantSid?: string;
}


declare class DefaultsContext {
  /**
   * Initialize the DefaultsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The SID of the Assistant that is the parent of the resource to fetch
   */
  constructor(version: V1, assistantSid: string);

  /**
   * fetch a DefaultsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DefaultsInstance) => any): Promise<DefaultsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a DefaultsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: DefaultsInstanceUpdateOptions, callback?: (error: Error | null, items: DefaultsInstance) => any): Promise<DefaultsInstance>;
}


declare class DefaultsInstance extends SerializableClass {
  /**
   * Initialize the DefaultsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The SID of the Assistant that is the parent of the resource
   */
  constructor(version: V1, payload: DefaultsPayload, assistantSid: string);

  private _proxy: DefaultsContext;
  accountSid: string;
  assistantSid: string;
  data: string;
  /**
   * fetch a DefaultsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DefaultsInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a DefaultsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: DefaultsInstanceUpdateOptions, callback?: (error: Error | null, items: DefaultsInstance) => any): void;
  url: string;
}


declare class DefaultsPage extends Page<V1, DefaultsPayload, DefaultsResource, DefaultsInstance> {
  /**
   * Initialize the DefaultsPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: DefaultsSolution);

  /**
   * Build an instance of DefaultsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DefaultsPayload): DefaultsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { DefaultsContext, DefaultsInstance, DefaultsList, DefaultsListInstance, DefaultsPage, DefaultsPayload, DefaultsResource, DefaultsSolution }
