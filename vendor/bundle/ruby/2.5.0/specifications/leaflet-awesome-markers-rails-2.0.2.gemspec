# -*- encoding: utf-8 -*-
# stub: leaflet-awesome-markers-rails 2.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "leaflet-awesome-markers-rails".freeze
  s.version = "2.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Rich Daley".freeze]
  s.date = "2016-07-13"
  s.description = "Add leaflet.awesome-markers to the Rails asset pipeline".freeze
  s.email = ["rich@fishpercolator.co.uk".freeze]
  s.homepage = "https://github.com/fishpercolator/leaflet-awesome-markers-rails".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.6.2".freeze
  s.summary = "Add leaflet.awesome-markers to the Rails asset pipeline".freeze

  s.installed_by_version = "2.7.6.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>.freeze, [">= 4.0.1"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.12"])
    else
      s.add_dependency(%q<rails>.freeze, [">= 4.0.1"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
    end
  else
    s.add_dependency(%q<rails>.freeze, [">= 4.0.1"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
  end
end
