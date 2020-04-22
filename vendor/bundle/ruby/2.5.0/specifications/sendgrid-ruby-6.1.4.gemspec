# -*- encoding: utf-8 -*-
# stub: sendgrid-ruby 6.1.4 ruby lib

Gem::Specification.new do |s|
  s.name = "sendgrid-ruby".freeze
  s.version = "6.1.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Elmer Thomas".freeze, "Robin Johnson".freeze, "Eddie Zaneski".freeze]
  s.date = "2020-04-15"
  s.description = "Official Twilio SendGrid Gem to Interact with Twilio SendGrids API in native Ruby".freeze
  s.email = "help@twilio.com".freeze
  s.homepage = "http://github.com/sendgrid/sendgrid-ruby".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.2".freeze)
  s.rubygems_version = "2.7.6.2".freeze
  s.summary = "Official Twilio SendGrid Gem".freeze

  s.installed_by_version = "2.7.6.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<ruby_http_client>.freeze, ["~> 3.4"])
      s.add_development_dependency(%q<sinatra>.freeze, ["< 3", ">= 1.4.7"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 13.0"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0"])
      s.add_development_dependency(%q<faker>.freeze, [">= 0"])
      s.add_development_dependency(%q<rubocop>.freeze, [">= 0"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5.9"])
    else
      s.add_dependency(%q<ruby_http_client>.freeze, ["~> 3.4"])
      s.add_dependency(%q<sinatra>.freeze, ["< 3", ">= 1.4.7"])
      s.add_dependency(%q<rake>.freeze, ["~> 13.0"])
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_dependency(%q<pry>.freeze, [">= 0"])
      s.add_dependency(%q<faker>.freeze, [">= 0"])
      s.add_dependency(%q<rubocop>.freeze, [">= 0"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5.9"])
    end
  else
    s.add_dependency(%q<ruby_http_client>.freeze, ["~> 3.4"])
    s.add_dependency(%q<sinatra>.freeze, ["< 3", ">= 1.4.7"])
    s.add_dependency(%q<rake>.freeze, ["~> 13.0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
    s.add_dependency(%q<faker>.freeze, [">= 0"])
    s.add_dependency(%q<rubocop>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.9"])
  end
end
