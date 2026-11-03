import { DataSourceTypes, Immutable, React, type UseDataSource } from "jimu-core";
import { type AllWidgetSettingProps } from "jimu-for-builder";
import { DataSourceSelector } from "jimu-ui/advanced/data-source-selector";
import { Label, TextInput } from "jimu-ui";
import { DEFAULT_TITLE, type IMConfig } from "../config";
import defaultMessages from "./translations/default";

const Imm = Immutable as unknown as <T>(val: T) => any;

export default class Setting extends React.PureComponent<
  AllWidgetSettingProps<IMConfig>
> {
  private readonly layerTypes = Imm([
    DataSourceTypes.FeatureLayer,
    DataSourceTypes.SubtypeGroupLayer,
  ]);

  private ensureConfig() {
    const base = { title: DEFAULT_TITLE };
    if (!this.props.config) return Imm(base);
    if (typeof (this.props.config as any).merge === "function") {
      return this.props.config;
    }
    return Imm({ ...base, ...(this.props.config as any) });
  }

  private nls(id: keyof typeof defaultMessages): string {
    return (
      this.props.intl?.formatMessage({
        id,
        defaultMessage: defaultMessages[id],
      }) || defaultMessages[id]
    );
  }

  private readPlainConfig(): Record<string, unknown> {
    const cfg = this.ensureConfig() as any;
    if (typeof cfg.get === "function") {
      return { title: cfg.get("title") };
    }
    return { title: cfg.title };
  }

  private updateConfig(patch: Record<string, unknown>): void {
    const current = this.ensureConfig() as any;
    const next =
      typeof current.merge === "function"
        ? current.merge(patch)
        : Imm({ ...this.readPlainConfig(), ...patch });
    this.props.onSettingChange({ id: this.props.id, config: next });
  }

  private onDataSourceChange = (useDataSources: UseDataSource[]): void => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources,
    });
  };

  render(): React.ReactNode {
    const plain = this.readPlainConfig();

    return (
      <div className="et-setting" style={{ padding: 16 }}>
        <div
          style={{
            marginBottom: 16,
            padding: 14,
            borderRadius: 8,
            border: "1px solid rgba(0,168,232,0.5)",
            background: "rgba(0,168,232,0.07)",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>
            {this.nls("dataSettings")}
          </div>
          <div
            style={{
              fontSize: 12,
              opacity: 0.88,
              marginBottom: 12,
              lineHeight: 1.45,
            }}
          >
            {this.nls("dataHint")}
          </div>
          <DataSourceSelector
            mustUseDataSource
            isMultiple
            types={this.layerTypes}
            useDataSources={this.props.useDataSources}
            onChange={this.onDataSourceChange}
            widgetId={this.props.id}
            hideDataView
          />
          <div
            style={{
              marginTop: 12,
              fontSize: 12,
              opacity: 0.75,
              lineHeight: 1.45,
            }}
          >
            {this.nls("dataRoles")}
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <Label style={{ display: "block", marginBottom: 6 }}>
            {this.nls("titleLabel")}
          </Label>
          <div style={{ marginBottom: 6, fontSize: 12, opacity: 0.75 }}>
            {this.nls("titleHint")}
          </div>
          <TextInput
            className="w-100"
            defaultValue={String(plain.title || DEFAULT_TITLE)}
            onAcceptValue={(value) => {
              this.updateConfig({
                title: String(value || DEFAULT_TITLE).trim() || DEFAULT_TITLE,
              });
            }}
          />
        </div>
      </div>
    );
  }
}
