import { SettingsSection } from '@/components/dashboard/settings-section';

export default function SettingsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <SettingsSection
        title="Profile Settings"
        description="Update user profile details, account preferences, and default workspace behavior."
      />
      <SettingsSection
        title="Organization Settings"
        description="Manage organization metadata, team structure, and workspace context."
      />
      <SettingsSection
        title="Notification Preferences"
        description="Choose which operational and automation events should trigger alerts."
      />
      <SettingsSection
        title="Integrations"
        description="Configure external systems used by assistants and workflow automations."
      />
      <SettingsSection
        title="Security"
        description="Prepare controls for authentication, access policies, and audit activity."
      />
    </div>
  );
}
