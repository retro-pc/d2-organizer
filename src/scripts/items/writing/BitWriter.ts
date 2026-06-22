export class BitWriter {
  private bits: Uint8Array;
  private offset = 0;
  private length = 0;

  constructor(capacity = 8192) {
    this.bits = new Uint8Array(capacity);
  }

  writeBit(value: number | boolean): this {
    if (this.offset >= this.bits.length) {
      const resized = new Uint8Array(this.bits.length + 8192);
      resized.set(this.bits);
      this.bits = resized;
    }
    this.bits[this.offset++] = value ? 1 : 0;
    if (this.offset > this.length) this.length = this.offset;
    return this;
  }

  // Write N zero bits (used for reserved/unknown fields)
  writeZeros(count: number): this {
    for (let i = 0; i < count; i++) this.writeBit(0);
    return this;
  }

  private writeBytes(bytes: Uint8Array, bits = bytes.length * 8): this {
    for (let i = 0; i < bits; i++) {
      const byteIdx = Math.floor(i / 8);
      const bitIdx = i % 8;
      this.writeBit(
        byteIdx < bytes.length ? (bytes[byteIdx] >> bitIdx) & 1 : 0
      );
    }
    return this;
  }

  writeUInt8(value: number, bits = 8): this {
    const buf = new Uint8Array(1);
    new DataView(buf.buffer).setUint8(0, value);
    return this.writeBytes(buf, bits);
  }

  writeUInt16(value: number, bits = 16): this {
    const buf = new Uint8Array(2);
    new DataView(buf.buffer).setUint16(0, value, true);
    return this.writeBytes(buf, bits);
  }

  writeUInt32(value: number, bits = 32): this {
    const buf = new Uint8Array(4);
    new DataView(buf.buffer).setUint32(0, value >>> 0, true);
    return this.writeBytes(buf, bits);
  }

  writeString(value: string, byteLength = value.length): this {
    const padded = value.padEnd(byteLength, "\0").slice(0, byteLength);
    const buf = new Uint8Array(byteLength);
    for (let i = 0; i < byteLength; i++) buf[i] = padded.charCodeAt(i);
    return this.writeBytes(buf);
  }

  writeArray(bytes: Uint8Array): this {
    return this.writeBytes(bytes);
  }

  align(): this {
    this.offset = (this.offset + 7) & ~7;
    if (this.offset > this.length) this.length = this.offset;
    return this;
  }

  toArray(): Uint8Array {
    const buf = new Uint8Array(Math.ceil(this.length / 8));
    let byteIdx = 0;
    let bitIdx = 0;
    for (let i = 0; i < this.length; i++) {
      if (this.bits[i]) buf[byteIdx] |= (1 << bitIdx) & 0xff;
      if (++bitIdx >= 8) {
        byteIdx++;
        bitIdx = 0;
      }
    }
    return buf;
  }
}
